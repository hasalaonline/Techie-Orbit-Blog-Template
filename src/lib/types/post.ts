import { Author } from './author'
import { Tag } from './tag'

export type Post = {
  id: string
  uuid: string
  title: string
  slug: string
  html: string
  comment_id: string
  feature_image: string | null
  featured: boolean
  visibility: 'public' | 'private'
  created_at: string
  updated_at: string
  published_at: string
  custom_excerpt: string | null
  codeinjection_head: string | null
  codeinjection_foot: string | null
  custom_template: string | null
  canonical_url: string | null
  tags: Tag[]
  authors: Author[]
  primary_author: Author
  primary_tag: Tag
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
  email_subject: string | null
  frontmatter: string | null
  feature_image_alt: string | null
  feature_image_caption: string | null
}
