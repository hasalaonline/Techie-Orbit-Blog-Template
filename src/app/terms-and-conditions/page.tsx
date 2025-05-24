'use client'; // Already present, good.

import AppleHeader from '@/components/organisms/AppleHeader';
import NewsroomHeader from '@/components/organisms/NewsroomHeader';
import InfoPage from '@/components/organisms/InfoPage';

const TermsAndConditionsPage = () => { // Renamed component for clarity
  return (
    <>
      <AppleHeader />
      <NewsroomHeader />
      <main className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans">
        {/* Assuming a slug "terms-and-conditions" exists or will be created for content */}
        <InfoPage slug="terms-and-conditions" />
      </main>
    </>
  );
};

export default TermsAndConditionsPage;
