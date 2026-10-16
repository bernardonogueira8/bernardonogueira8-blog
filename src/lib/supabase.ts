import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://nstduenjmscgglacgmqh.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_eYRu_uTpRo04187h9gt2xg_nccJJOHv';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export interface Post {
  id: string;
  slug: string;
  title: string;
  author: string;
  pub_date: string;
  description: string;
  content: string;
  tags: string[];
  languages: string[];
  project: boolean;
  image_url?: string | null;
  image_alt?: string | null;
  medium_url?: string | null;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  profile_name: string;
  profile_title: string;
  headline: string;
  bio_summary: string;
  available_for_work: boolean;
  profile_image: string;
  portfolio_image: string;
  profile_alt: string;
  github_url: string;
  linkedin_url: string;
  instagram_url: string;
  youtube_url: string;
  medium_url?: string | null;
  email: string;
  alias: string;
  hobbies: string[];
  about_title: string;
  about_description: string;
  about_content: string;
  contact_title: string;
  contact_subtitle: string;
  contact_button_text: string;
  page_title: string;
  page_description: string;
  updated_at?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  order_index: number;
  created_at?: string;
  updated_at?: string;
}

export interface TechStackItem {
  id: string;
  name: string;
  key: string;
  category: string;
  order_index: number;
  is_featured: boolean;
  created_at?: string;
  updated_at?: string;
}
