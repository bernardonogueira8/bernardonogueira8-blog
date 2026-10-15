import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDir = path.resolve('src/pages/blog/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

console.log(`Found ${files.length} markdown post files to generate SQL...`);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
}

const customSlugs = {
  '00 Saude Fetal.md': 'saude-fetal',
  '01 Titanic ML.md': 'titanic-ml',
  '02 Heart Disease.md': 'heart-disease',
  '03 California Housing Prices.md': 'california-housing-prices',
  '04 Novo SGA.md': 'novo-sga',
  '05 Como consumir dados do DATASUS.md': 'como-consumir-dados-do-datasus',
};

function escapeSqlString(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

function escapeSqlArray(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return "'{}'::text[]";
  const elements = arr.map(item => `"${String(item).replace(/"/g, '\\"')}"`).join(',');
  return `'${elements}'::text[]`;
}

const sqlStatements = [];

for (const file of files) {
  const filePath = path.join(postsDir, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const slug = customSlugs[file] || slugify(data.title || file.replace(/\.md$/, ''));
  const pubDate = data.pubDate ? new Date(data.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
  const title = String(data.title || file.replace(/\.md$/, ''));
  const author = data.author || 'Bernardo Nogueira';
  const description = data.description || '';
  const tags = Array.isArray(data.tags) ? data.tags : [];
  const languages = Array.isArray(data.languages) ? data.languages : [];
  const project = Boolean(data.project);
  const imageUrl = data.image?.url || null;
  const imageAlt = data.image?.alt || null;

  const stmt = `
INSERT INTO public.posts (
  slug, title, author, pub_date, description, content, tags, languages, project, image_url, image_alt, status
) VALUES (
  ${escapeSqlString(slug)},
  ${escapeSqlString(title)},
  ${escapeSqlString(author)},
  ${escapeSqlString(pubDate)}::date,
  ${escapeSqlString(description)},
  ${escapeSqlString(content.trim())},
  ARRAY[${tags.map(t => escapeSqlString(t)).join(', ')}]::text[],
  ARRAY[${languages.map(l => escapeSqlString(l)).join(', ')}]::text[],
  ${project},
  ${escapeSqlString(imageUrl)},
  ${escapeSqlString(imageAlt)},
  'published'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  author = EXCLUDED.author,
  pub_date = EXCLUDED.pub_date,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  tags = EXCLUDED.tags,
  languages = EXCLUDED.languages,
  project = EXCLUDED.project,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  status = EXCLUDED.status,
  updated_at = NOW();
`;
  sqlStatements.push(stmt);
}

const fullSql = sqlStatements.join('\n');
fs.writeFileSync('scripts/seed-posts.sql', fullSql, 'utf-8');
console.log('Generated scripts/seed-posts.sql successfully!');
