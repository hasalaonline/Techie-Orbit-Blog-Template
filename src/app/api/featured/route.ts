import { getFeaturedPosts } from '@/lib/api/api';

export async function GET() {
  return getFeaturedPosts();
}
