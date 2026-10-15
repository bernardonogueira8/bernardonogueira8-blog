import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://nstduenjmscgglacgmqh.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zdGR1ZW5qbXNjZ2dsYWNnbXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwOTMwNDcsImV4cCI6MjEwNzY2OTA0N30.-ka3W2AEHXeO0nVaUYKcjgR8RCq4NAEwCwHwKOnBBb4';

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
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
}
