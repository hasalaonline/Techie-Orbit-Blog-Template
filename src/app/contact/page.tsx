'use client'; // Required because InfoPage will use a hook (useGetInfoPage)

import AppleHeader from '@/components/organisms/AppleHeader';
import NewsroomHeader from '@/components/organisms/NewsroomHeader';
import InfoPage from '@/components/organisms/InfoPage';

const ContactPage = () => {
  return (
    <>
      <AppleHeader />
      <NewsroomHeader />
      <main className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans">
        <InfoPage slug="contact" />
      </main>
    </>
  );
};

export default ContactPage;
