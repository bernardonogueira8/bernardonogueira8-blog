import { supabase, type CertificateItem, type CertificateCategory } from './supabase';
import { defaultProfile } from './profile';

const STORE_ROW_ID = 'certificates_store';

export interface CertificatesPageMeta {
  title_main: string;
  title_accent: string;
  description: string;
  lattes_url?: string;
  eyebrow?: string;
}

export const defaultCertificatesMeta: CertificatesPageMeta = {
  title_main: 'Acervo',
  title_accent: 'Acadêmico',
  description:
    'Repositório estruturado de titulação acadêmica, participação em eventos científicos e certificações técnicas.',
  lattes_url: 'http://lattes.cnpq.br/',
};

export function calculateTotalHours(items: CertificateItem[]): number {
  return items.reduce((acc, item) => {
    if (!item.workload) return acc;
    const match = item.workload.match(/(\d+[\d\.,]*)\s*h/i) || item.workload.match(/(\d+)/);
    if (match) {
      const num = parseInt(match[1].replace(/\D/g, ''), 10);
      return acc + (isNaN(num) ? 0 : num);
    }
    return acc;
  }, 0);
}

export const defaultCertificates: CertificateItem[] = [
  // ==========================================
  // 1. FORMAÇÃO ACADÊMICA / TITULAÇÃO (Coluna Principal)
  // ==========================================
  {
    id: 'form-1',
    name: 'Pós-Graduação Lato Sensu em Ciência de Dados Aplicada à Saúde',
    event_date: '2024 - 2025',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Formação • Especialização',
    category: 'formacao',
    institution: 'Especialização Acadêmica',
    workload: '360h',
    order_index: 5,
  },
  {
    id: 'form-2',
    name: 'Pós-Graduação Lato Sensu em Matemática Financeira e Estatística',
    event_date: '2024 - 2025',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Formação • Especialização',
    category: 'formacao',
    institution: 'Especialização Acadêmica',
    workload: '360h',
    order_index: 4,
  },
  {
    id: 'form-3',
    name: 'Licenciatura em Matemática',
    event_date: 'Em andamento',
    url: 'https://portal.ifba.edu.br/salvador',
    certificate_type: 'Formação • Graduação',
    category: 'formacao',
    institution: 'IFBA - Campus Salvador',
    workload: '3200h',
    order_index: 3,
  },
  {
    id: 'form-4',
    name: 'Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)',
    event_date: 'Concluído',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Formação • Graduação Tecnológica',
    category: 'formacao',
    institution: 'Ensino Superior',
    workload: '2000h',
    order_index: 2,
  },
  {
    id: 'form-5',
    name: 'Graduação em Gastronomia',
    event_date: 'Concluído',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Formação • Graduação',
    category: 'formacao',
    institution: 'Ensino Superior',
    workload: '1600h',
    order_index: 1,
  },

  // ==========================================
  // 2. EVENTOS, EXTENSÃO & CONGRESSOS (Coluna Esquerda)
  // ==========================================
  {
    id: 'evt-1',
    name: 'Programa Institucional de Bolsas de Iniciação à Docência (PIBID - Matemática)',
    event_date: 'Nov 2024 - Fev 2026',
    url: 'https://portal.ifba.edu.br/salvador',
    certificate_type: 'Evento • Bolsista PIBID / Docência',
    category: 'evento',
    institution: 'IFBA / CAPES',
    workload: '400h',
    order_index: 4,
  },
  {
    id: 'evt-2',
    name: 'Projeto de Extensão: Educação Financeira e Preparação para a OLITEF',
    event_date: 'Fev 2025 - Dez 2025',
    url: 'https://portal.ifba.edu.br/salvador',
    certificate_type: 'Evento • Extensão Universitária',
    category: 'evento',
    institution: 'IFBA - Campus Salvador',
    workload: '160h',
    order_index: 3,
  },
  {
    id: 'evt-3',
    name: 'Encontro de Inovação, Indicadores e Transformação Digital na Saúde Pública',
    event_date: '2024',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Evento • Simpósio / Encontro Técnico',
    category: 'evento',
    institution: 'SESAB / FESFSUS',
    workload: '20h',
    order_index: 2,
  },
  {
    id: 'evt-4',
    name: 'Semana Nacional de Ciência e Tecnologia (SNCT) - Educação Matemática & Dados',
    event_date: 'Out 2024',
    url: 'https://portal.ifba.edu.br/salvador',
    certificate_type: 'Evento • Congresso / Semana Acadêmica',
    category: 'evento',
    institution: 'IFBA - Campus Salvador',
    workload: '16h',
    order_index: 1,
  },

  // ==========================================
  // 3. CURSOS & CERTIFICAÇÕES (Coluna Direita)
  // ==========================================
  {
    id: 'cur-1',
    name: 'Business Intelligence, Modelagem Dimensional e Dashboards com Power BI',
    event_date: '2025',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Curso • Certificação Técnica',
    category: 'curso',
    institution: 'Formação Complementar em BI',
    workload: '80h',
    order_index: 5,
  },
  {
    id: 'cur-2',
    name: 'Python para Ciência de Dados, Análise Exploratória e Machine Learning',
    event_date: '2024',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Curso • Aperfeiçoamento',
    category: 'curso',
    institution: 'Data Science Academy / Formação',
    workload: '72h',
    order_index: 4,
  },
  {
    id: 'cur-3',
    name: 'Engenharia de Prompts e Aplicações Práticas com Large Language Models (LLMs)',
    event_date: '2025',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Curso • Inteligência Artificial',
    category: 'curso',
    institution: 'Formação Complementar',
    workload: '40h',
    order_index: 3,
  },
  {
    id: 'cur-4',
    name: 'Banco de Dados SQL, Consultas Avançadas e ETL Aplicado a Sistemas de Saúde',
    event_date: '2023',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Curso • Banco de Dados',
    category: 'curso',
    institution: 'Capacitação Técnica',
    workload: '60h',
    order_index: 2,
  },
  {
    id: 'cur-5',
    name: 'Visualização de Dados Científicos com Pandas, Matplotlib e Seaborn',
    event_date: '2024',
    url: 'https://www.linkedin.com/in/bernardonogueira8',
    certificate_type: 'Curso • Curta Duração',
    category: 'curso',
    institution: 'Formação Técnica',
    workload: '30h',
    order_index: 1,
  },
];

export function inferCategoryFromType(typeStr: string, explicitCategory?: string): CertificateCategory {
  if (explicitCategory === 'formacao' || explicitCategory === 'evento' || explicitCategory === 'curso') {
    return explicitCategory;
  }
  const normalized = (typeStr || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (
    normalized.includes('formacao') ||
    normalized.includes('graduacao') ||
    normalized.includes('pos-graduacao') ||
    normalized.includes('especializacao') ||
    normalized.includes('licenciatura') ||
    normalized.includes('mestrado') ||
    normalized.includes('doutorado') ||
    normalized.includes('tecnologo') ||
    normalized.includes('academica')
  ) {
    return 'formacao';
  }
  if (
    normalized.includes('evento') ||
    normalized.includes('congresso') ||
    normalized.includes('simposio') ||
    normalized.includes('palestra') ||
    normalized.includes('seminario') ||
    normalized.includes('extensao') ||
    normalized.includes('pibid') ||
    normalized.includes('encontro') ||
    normalized.includes('hackathon') ||
    normalized.includes('feira')
  ) {
    return 'evento';
  }
  return 'curso';
}

export async function getCertificatesStore(): Promise<{
  items: CertificateItem[];
  meta: CertificatesPageMeta;
  fromDatabase: boolean;
}> {
  try {
    const { data: storeRow, error: storeErr } = await supabase
      .from('profile')
      .select('profile_name, profile_title, headline, about_content')
      .eq('id', STORE_ROW_ID)
      .maybeSingle();

    if (!storeErr && storeRow && storeRow.about_content) {
      try {
        const parsed = JSON.parse(storeRow.about_content);
        const rawItems = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.items) ? parsed.items : null;
        const rawMeta = !Array.isArray(parsed) && parsed?.meta ? parsed.meta : null;

        const meta: CertificatesPageMeta = {
          title_main: rawMeta?.title_main || storeRow.profile_name || defaultCertificatesMeta.title_main,
          title_accent: rawMeta?.title_accent || defaultCertificatesMeta.title_accent,
          description: rawMeta?.description || storeRow.headline || defaultCertificatesMeta.description,
          lattes_url: rawMeta?.lattes_url || defaultCertificatesMeta.lattes_url,
        };

        if (rawItems) {
          const items = rawItems
            .map((item: any) => ({
              ...item,
              category: inferCategoryFromType(item.certificate_type, item.category),
            }))
            .sort((a: CertificateItem, b: CertificateItem) => (b.order_index || 0) - (a.order_index || 0));

          return { items, meta, fromDatabase: true };
        }
      } catch (e) {
        console.error('Erro ao decodificar JSON de certificados:', e);
      }
    }

    return { items: defaultCertificates, meta: defaultCertificatesMeta, fromDatabase: false };
  } catch (err) {
    console.error('Falha na requisição de getCertificatesStore:', err);
    return { items: defaultCertificates, meta: defaultCertificatesMeta, fromDatabase: false };
  }
}

export async function getCertificates(): Promise<CertificateItem[]> {
  const { items } = await getCertificatesStore();
  return items;
}

export async function saveCertificatesToStore(
  items: CertificateItem[],
  meta: CertificatesPageMeta = defaultCertificatesMeta
): Promise<{ success: boolean; error?: string }> {
  try {
    const envelope = {
      meta,
      items,
    };

    const payload = {
      ...defaultProfile,
      id: STORE_ROW_ID,
      profile_name: meta.title_main || defaultCertificatesMeta.title_main,
      profile_title: 'Currículo Lattes',
      headline: meta.description || defaultCertificatesMeta.description,
      about_content: JSON.stringify(envelope),
      updated_at: new Date().toISOString(),
    };

    delete (payload as any).profile_image_light;
    delete (payload as any).profile_image_dark;

    const { error } = await supabase.from('profile').upsert(payload);

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
