import React from 'react';
import Link from 'next/link';

const footerSections = [
  {
    title: 'Shop and Learn',
    links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home'],
  },
  {
    title: 'Account',
    links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
  },
  {
    title: 'Services',
    links: ['Apple Music', 'Apple TV+', 'Apple Fitness+', 'Apple News+', 'Apple Arcade', 'iCloud', 'Apple Books'],
  },
  {
    title: 'Apple Values',
    links: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supplier Responsibility'],
  },
  {
    title: 'About Apple',
    links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Contact Apple'],
  }
];

const AppleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-gray-ultralight text-apple-gray-dark font-sans text-xs">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8"> {/* Adjusted py */}
        {/* Optional Top Breadcrumb Section */}
        <div className="pb-6 mb-6 border-b border-apple-gray-light"> {/* Adjusted pb and mb */}
          <nav className="flex items-center space-x-2">
            <Link href="/" passHref>
              <span className="text-lg text-apple-gray-dark hover:text-apple-black cursor-pointer"></span>
            </Link>
            <span className="text-apple-gray-medium">›</span>
            {/* Assuming Newsroom is the primary context for this footer variant */}
            <span className="text-apple-gray-medium">Newsroom</span> 
          </nav>
        </div>

        {/* Main Footer Links Section - Using Grid for columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 mb-8"> {/* Adjusted mb */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-apple-black mb-2.5">{section.title}</h3> {/* Adjusted mb */}
              <ul className="space-y-1.5"> {/* Adjusted space-y */}
                {section.links.map((linkText) => (
                  <li key={linkText}>
                    <a href="#" className="text-apple-gray-medium hover:text-apple-black hover:underline">
                      {linkText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* "More ways to shop" Section */}
        <div className="text-sm text-apple-gray-medium mb-4 pb-4 border-b border-apple-gray-light"> {/* Adjusted mb and pb */}
          More ways to shop: <a href="#" className="text-apple-blue-link hover:underline">Find an Apple Store</a> or <a href="#" className="text-apple-blue-link hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        {/* Bottom Bar with Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-apple-gray-medium pt-4"> {/* Added pt-4 */}
          <p className="mb-3 sm:mb-0 text-center sm:text-left">Copyright © {currentYear} Apple Inc. All rights reserved.</p> {/* Adjusted mb and text alignment */}
          <nav className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-5"> {/* Adjusted spacing and justification */}
            <a href="#" className="hover:text-apple-black hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-apple-black hover:underline">Terms of Use</a>
            <a href="#" className="hover:text-apple-black hover:underline">Sales and Refunds</a>
            <a href="#" className="hover:text-apple-black hover:underline">Legal</a>
            <a href="#" className="hover:text-apple-black hover:underline">Site Map</a>
          </nav>
          {/* Optional Region Selector - Can be added on the far right */}
          {/* <div className="mt-4 sm:mt-0">
            <a href="#" className="hover:text-apple-black hover:underline">United States</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default AppleFooter;
