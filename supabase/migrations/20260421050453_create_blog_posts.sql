/*
  # Blog Posts table

  1. New Tables
    - `blog_posts` — static blog content for SEO pages
  2. Security
    - RLS enabled. Public read access for anon and authenticated users.
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL DEFAULT '',
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'Digital Marketing',
  cover_url text NOT NULL DEFAULT '',
  published_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'blog_posts' AND policyname = 'Anyone can read blog posts'
  ) THEN
    CREATE POLICY "Anyone can read blog posts"
      ON blog_posts FOR SELECT
      TO anon, authenticated
      USING (true);
  END IF;
END $$;
