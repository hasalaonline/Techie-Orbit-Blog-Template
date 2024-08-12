import { getPost } from '@/lib/api/api';
import { NextRequest } from 'next/server';

export async function GET(request: Request | NextRequest) {
  const url = new URL(request.url.toString());

  const slug = url.searchParams.get('slug') || '';

  return getPost(slug);
}
