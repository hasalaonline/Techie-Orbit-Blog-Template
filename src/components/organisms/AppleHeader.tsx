import React from 'react';

const navItems = [
  "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", 
  "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"
];

const AppleHeader: React.FC = () => {
  return (
    <nav className="bg-apple-gray-dark text-apple-gray-ultralight font-sans text-xs w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="flex justify-between items-center h-11">
          <li>
            <a href="/" aria-label="Apple Home" className="hover:text-white"> {/* Changed href to "/" and updated aria-label */}
              <span className="text-lg"></span> {/* Apple Logo Placeholder */}
            </a>
          </li>
          {/* Hide text links on small screens, show on medium and up */}
          {navItems.map((item) => (
            <li key={item} className="hidden md:block"> {/* Hide below md */}
              <a href="#" className="px-2.5 hover:text-white">
                {item}
              </a>
            </li>
          ))}
          {/* Placeholder for a Mobile Menu button if needed - for now, just icons are shown */}
          {/* <li className="md:hidden">
            <button aria-label="Open menu" className="px-2.5 hover:text-white">
              Menu
            </button>
          </li> */}
          <li>
            <a href="#" aria-label="Search" className="px-2.5 hover:text-white"> {/* Ensure this is visible on all sizes */}
              {/* Placeholder for Search Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Shopping Bag" className="px-2.5 hover:text-white">
              {/* Placeholder for Bag Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppleHeader;
