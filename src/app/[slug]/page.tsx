'use client';

import AppleHeader from '@/components/organisms/AppleHeader';
import NewsroomHeader from '@/components/organisms/NewsroomHeader';
import PostPage from '@/components/organisms/SinglePost'; // This is SinglePost.tsx

const PostDetail = ({ params }: { params: { slug: string } }) => { // Added type for slug
  const { slug } = params;

  return (
    <>
      <AppleHeader />
      <NewsroomHeader />
      <main className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans">
        <PostPage slug={slug} />
      </main>
      {/* Footer removed for now, can be added later if a new design is provided */}
    </>
  );
};

export default PostDetail;
