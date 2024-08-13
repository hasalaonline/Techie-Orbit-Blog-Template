'use client';

import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/Header';
import PostPage from '@/components/organisms/SinglePost';

const PostDetail = ({ params }: { params: any }) => {
  const { slug } = params;

  return (
    <>
      <Header />
      <PostPage slug={slug} />
      <Footer />
    </>
  );
};

export default PostDetail;
