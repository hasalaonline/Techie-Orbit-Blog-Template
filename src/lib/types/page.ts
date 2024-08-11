export type Page = {
  slug: string
  id: string
  uuid: string
  title: string
  html: string
  comment_id: string
  feature_image: string | null
  featured: boolean
  visibility: string
  created_at: string
  updated_at: string
  published_at: string
  custom_excerpt: string | null
  codeinjection_head: string | null
  codeinjection_foot: string | null
  custom_template: string | null
  canonical_url: string | null
  show_title_and_feature_image: boolean
  url: string
  excerpt: string
  reading_time: number
  access: boolean
  comments: boolean
  og_image: string | null
  og_title: string | null
  og_description: string | null
  twitter_image: string | null
  twitter_title: string | null
  twitter_description: string | null
  meta_title: string | null
  meta_description: string | null
  frontmatter: string | null
  feature_image_alt: string | null
  feature_image_caption: string | null
}