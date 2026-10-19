import { supabase, type TechStackItem } from './supabase';

export const defaultTechStack: TechStackItem[] = [
  { id: '1', name: 'Power BI', key: 'power', category: 'Data & BI', order_index: 1, is_featured: true },
  { id: '2', name: 'Python', key: 'python', category: 'Linguagens & Ciência de Dados', order_index: 2, is_featured: true },
  { id: '3', name: 'SQL', key: 'sql', category: 'Banco de Dados', order_index: 3, is_featured: true },
  { id: '4', name: 'Pandas', key: 'pandas', category: 'Ciência de Dados & ML', order_index: 4, is_featured: true },
  { id: '5', name: 'Numpy', key: 'numpy', category: 'Ciência de Dados & ML', order_index: 5, is_featured: true },
  { id: '6', name: 'Seaborn', key: 'seaborn', category: 'Visualização de Dados', order_index: 6, is_featured: true },
  { id: '7', name: 'Matplotlib', key: 'matplotlib', category: 'Visualização de Dados', order_index: 7, is_featured: true },
  { id: '8', name: 'MySQL', key: 'mysql', category: 'Banco de Dados', order_index: 8, is_featured: true },
  { id: '9', name: 'PHP', key: 'php', category: 'Desenvolvimento Web', order_index: 9, is_featured: true },
  { id: '10', name: 'Git', key: 'git', category: 'DevOps & Controle de Versão', order_index: 10, is_featured: true },
  { id: '11', name: 'Figma', key: 'figma', category: 'UI / UX Design', order_index: 11, is_featured: true },
  { id: '12', name: 'Markdown', key: 'markdown', category: 'Documentação', order_index: 12, is_featured: true },
];

export async function getTechStack(onlyFeatured = false): Promise<TechStackItem[]> {
  try {
    let query = supabase
      .from('tech_stack')
      .select('*')
      .order('order_index', { ascending: true });

    if (onlyFeatured) {
      query = query.eq('is_featured', true);
    }

    const { data, error } = await query;
    if (error || !data || data.length === 0) {
      if (error) console.error('Erro ao buscar tech stack do Supabase:', error);
      return onlyFeatured ? defaultTechStack.filter(t => t.is_featured) : defaultTechStack;
    }
    return data;
  } catch (err) {
    console.error('Falha na requisição de getTechStack:', err);
    return onlyFeatured ? defaultTechStack.filter(t => t.is_featured) : defaultTechStack;
  }
}

export async function createTechStack(item: Omit<TechStackItem, 'id'>): Promise<{ success: boolean; data?: TechStackItem; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('tech_stack')
      .insert([item])
      .select()
      .single();

    if (error) return { success: false, error: error.message };
    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function updateTechStack(id: string, updates: Partial<TechStackItem>): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('tech_stack')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function deleteTechStack(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('tech_stack')
      .delete()
      .eq('id', id);

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
