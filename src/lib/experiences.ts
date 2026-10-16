import { supabase, type Experience } from './supabase';

export const defaultExperiences: Experience[] = [
  {
    id: 'exp-6',
    title: 'Profissional de dados em BI',
    company: 'IFBA - Campus Salvador',
    period: '2026 - Presente',
    description: 'Desenvolvo painéis interativos e dashboards para monitoramento e visualização de indicadores da extensão. Apoio a validação e atualização periódica das informações.',
    order_index: 6,
  },
  {
    id: 'exp-5',
    title: 'Tecnólogo em Gestão de Sistema de Informação',
    company: 'FESFSUS',
    period: '2023 - Presente',
    description: 'Responsável pela gestão e desenvolvimento de sistemas na Diretoria de Assistência Farmacêutica da SESAB, conduzindo o levantamento de requisitos, implementação de soluções, testes e análises de desempenho com Power BI e Tableau.',
    order_index: 5,
  },
  {
    id: 'exp-4',
    title: 'Bolsista do Programa Institucional de Bolsas de Iniciação à Docência (PIBID)',
    company: 'IFBA - Campus Salvador',
    period: 'novembro de 2024 - fevereiro de 2026',
    description: 'Bolsista do PIBID no IFBA, atuando no apoio à docência em Matemática por meio de práticas pedagógicas inovadoras, desenvolvimento de materiais didáticos e integração entre teoria acadêmica e prática escolar.',
    order_index: 4,
  },
  {
    id: 'exp-3',
    title: 'Extensionista Acadêmico - Educação Financeira e OLITEF',
    company: 'IFBA - Campus Salvador',
    period: 'fevereiro de 2025 - dezembro de 2025',
    description: 'Atuei no projeto de extensão voltado à promoção da Educação Financeira para estudantes da educação básica, alinhado às diretrizes da BNCC e focado na preparação para a OLITEF (Olimpíada do Tesouro Direto).',
    order_index: 3,
  },
  {
    id: 'exp-2',
    title: 'Técnico de Tecnologia da Informação',
    company: 'FESFSUS',
    period: 'mai de 2021 - mai de 2023',
    description: 'Atuação no setor de TI da Unidade de Saúde CIMEB, com foco em manutenção de hardware e redes, administração de sistemas (AGHUse, CadSUS, AFSESAB) e desenvolvimento de soluções em Python para otimização de processos internos.',
    order_index: 2,
  },
  {
    id: 'exp-1',
    title: 'Técnico em Manutenção de Computadores (Estágio)',
    company: 'ABM Garcia Informática',
    period: 'mai de 2019 - out de 2019',
    description: 'Atuação no suporte técnico e manutenção de equipamentos de informática, realizando reparos, configurações de rede e atendimento direto a clientes na área de tecnologia.',
    order_index: 1,
  },
];

export async function getExperiences(): Promise<Experience[]> {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('order_index', { ascending: false });

    if (error || !data || data.length === 0) {
      if (error) console.error('Erro ao buscar experiências do Supabase:', error);
      return defaultExperiences;
    }
    return data;
  } catch (err) {
    console.error('Falha na requisição de getExperiences:', err);
    return defaultExperiences;
  }
}

export async function createExperience(exp: Omit<Experience, 'id'>): Promise<{ success: boolean; data?: Experience; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .insert([exp])
      .select()
      .single();

    if (error) return { success: false, error: error.message };
    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function updateExperience(id: string, updates: Partial<Experience>): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('experiences')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function deleteExperience(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('experiences')
      .delete()
      .eq('id', id);

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
