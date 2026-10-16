import { supabase, type Profile } from './supabase';

export const defaultProfile: Profile = {
  id: 'main',
  profile_name: 'Bernardo Nogueira',
  profile_title: 'Data Scientist',
  headline: 'Data Scientist & Math Teacher apaixonado por tecnologia, educação e ciência.',
  bio_summary: 'Pós em Ciência de Dados Aplicada à Saúde e Matemática Financeira e Estatística, Meu conjunto de habilidades inclui Python, SQL, Visualização de Dados com Power BI e tecnologias como Large Language Models(LLMs).',
  available_for_work: true,
  profile_image: '/profile.png',
  profile_image_light: '/profile-light.png',
  profile_image_dark: '/profile-dark.png',
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

    let lightImage = defaultProfile.profile_image_light || '/profile-light.png';
    let darkImage = defaultProfile.profile_image_dark || '/profile-dark.png';
    let mainImage = data.profile_image || defaultProfile.profile_image || '/profile.png';

    // Decode if profile_image contains JSON format
    if (typeof data.profile_image === 'string' && data.profile_image.trim().startsWith('{')) {
      try {
        const parsed = JSON.parse(data.profile_image);
        if (parsed.light) lightImage = parsed.light;
        if (parsed.dark) darkImage = parsed.dark;
        mainImage = parsed.light || parsed.dark || '/profile.png';
      } catch (e) {}
    } else if (data.profile_image_light || data.profile_image_dark) {
      if (data.profile_image_light) lightImage = data.profile_image_light;
      if (data.profile_image_dark) darkImage = data.profile_image_dark;
    } else if (data.profile_image && data.profile_image !== '/profile.png') {
      mainImage = data.profile_image;
      lightImage = data.profile_image;
      darkImage = data.profile_image;
    }

    return {
      ...defaultProfile,
      ...data,
      profile_image: mainImage,
      profile_image_light: lightImage,
      profile_image_dark: darkImage,
      hobbies: Array.isArray(data.hobbies) ? data.hobbies : defaultProfile.hobbies,
    };
  } catch (err) {
    console.error('Falha na requisição de getProfile:', err);
    return defaultProfile;
  }
}

export async function updateProfile(updates: Partial<Profile>): Promise<{ success: boolean; error?: string }> {
  try {
    const payload: any = { ...updates };
    // If separate column keys are present, encode them into profile_image to prevent missing column schema errors
    if (payload.profile_image_light || payload.profile_image_dark) {
      const light = payload.profile_image_light || '/profile-light.png';
      const dark = payload.profile_image_dark || '/profile-dark.png';
      payload.profile_image = JSON.stringify({ light, dark });
      delete payload.profile_image_light;
      delete payload.profile_image_dark;
    }

    const { error } = await supabase
      .from('profile')
      .upsert({
        id: 'main',
        ...payload,
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
