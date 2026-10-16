import { supabase, type Profile } from './supabase';

export const defaultProfile: Profile = {
  id: 'main',
  profile_name: 'Bernardo Nogueira',
  profile_title: 'Data Scientist',
  headline: 'Data Scientist & Math Teacher apaixonado por tecnologia, educação e ciência.',
  bio_summary: 'Pós em Ciência de Dados Aplicada à Saúde e Matemática Financeira e Estatística, Meu conjunto de habilidades inclui Python, SQL, Visualização de Dados com Power BI e tecnologias como Large Language Models(LLMs).',
  available_for_work: true,
  profile_image: '/profile.png',
  portfolio_image: '/portfolio.png',
  profile_alt: 'Foto de Bernardo Nogueira para o portfólio',
  github_url: 'https://github.com/bernardonogueira8',
  linkedin_url: 'https://www.linkedin.com/in/bernardonogueira8',
  instagram_url: 'https://www.instagram.com/bernardo.nogueira8',
  youtube_url: 'https://www.youtube.com/channel/UC_Zyyr27x67UaGcHS55rutQ',
  medium_url: 'https://medium.com/@bernardonogueira8',
  email: 'bernardonogueira8@hotmail.com',
  alias: 'bernardonogueira8',
  hobbies: ['Ciência de Dados', 'Matemática', 'Gastronomia'],
  about_title: 'Bernardo Nogueira | Data Science, Matemática e Gastronomia 🚀',
  about_description: 'Minha jornada entre números, dados, sabores e tecnologia. Aqui compartilho experiências, aprendizados e projetos que unem ciência, ensino e criatividade.',
  about_content: '',
  contact_title: 'Quer transformar dados em insights?',
  contact_subtitle: 'Vamos conversar!',
  contact_button_text: 'Fale Comigo',
  page_title: 'BernardoNogueira8',
  page_description: 'Portfólio minimalista e moderno para destacar projetos em Data Science, Matemática e Tecnologia.',
};

export async function getProfile(): Promise<Profile> {
  try {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .eq('id', 'main')
      .maybeSingle();

    if (error || !data) {
      if (error) console.error('Erro ao buscar perfil do Supabase:', error);
      return defaultProfile;
    }

    return {
      ...defaultProfile,
      ...data,
      hobbies: Array.isArray(data.hobbies) ? data.hobbies : defaultProfile.hobbies,
    };
  } catch (err) {
    console.error('Falha na requisição de getProfile:', err);
    return defaultProfile;
  }
}

export async function updateProfile(updates: Partial<Profile>): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('profile')
      .upsert({
        id: 'main',
        ...updates,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || 'Erro inesperado ao salvar perfil.' };
  }
}
