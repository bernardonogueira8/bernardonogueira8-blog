import { supabase, type Post } from './supabase';

export async function getAllPosts(includeDrafts = false): Promise<Post[]> {
  let query = supabase
    .from('posts')
    .select('*')
    .order('pub_date', { ascending: false });

  if (!includeDrafts) {
    query = query.eq('status', 'published');
  }

  const { data, error } = await query;
  if (error) {
    console.error('Error fetching posts from Supabase:', error);
    return [];
  }
  return data || [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching post by slug "${slug}":`, error);
    return null;
  }
  return data;
}

export async function getAllProjects(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .eq('project', true)
    .order('pub_date', { ascending: false });

  if (error) {
    console.error('Error fetching projects from Supabase:', error);
    return [];
  }
  return data || [];
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagsSet = new Set<string>();
  posts.forEach((post) => {
    (post.tags || []).forEach((t) => {
      if (t && typeof t === 'string') tagsSet.add(t.trim());
    });
  });
  return Array.from(tagsSet).sort();
}

export async function getAllLanguages(): Promise<string[]> {
  const posts = await getAllPosts();
  const langSet = new Set<string>();
  posts.forEach((post) => {
    (post.languages || []).forEach((l) => {
      if (l && typeof l === 'string') langSet.add(l.trim().toLowerCase());
    });
  });
  return Array.from(langSet).sort();
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(p => (p.tags || []).some(t => t.toLowerCase() === tag.toLowerCase()));
}

export async function getPostsByLanguage(lang: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(p => (p.languages || []).some(l => l.toLowerCase() === lang.toLowerCase()));
}
