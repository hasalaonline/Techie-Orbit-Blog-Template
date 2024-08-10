export type Tag = {
  id: string
  name: string
  slug: string
  description: string | null
  feature_image: string | null
  visibility: 'public' | 'private'
  meta_title: string | null
  meta_description: string | null
  og_image: string | null
  og_title: string | null
  og_description: string | null
  twitter_image: string | null
  twitter_title: string | null
  twitter_description: string | null
  codeinjection_head: string | null
  codeinjection_foot: string | null
  canonical_url: string | null
  accent_color: string | null
  url: string
}
