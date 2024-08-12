import { getPosts } from '@/lib/api/api';
import { NextRequest } from 'next/server';

export async function GET(request: Request | NextRequest) {
  const url = new URL(request.url.toString());

  const page = Number(url.searchParams.get('page')) || 1;
  const limit = Number(url.searchParams.get('limit')) || 9;
  const filter = url.searchParams.get('filter') || '';

  return getPosts(page, limit, filter);
}
