import React from 'react';

const subNavItems = ["Apple Services", "Apple Stories"];

const NewsroomHeader: React.FC = () => {
  return (
    <header className="bg-apple-white text-apple-black font-sans border-b border-apple-gray-light">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Newsroom Title */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              <a href="/">Newsroom</a> {/* Changed href to "/" */}
            </h1>
          </div>

          {/* Spacer for centering sub-nav or pushing search to the right */}
          <div className="flex-grow flex justify-center">
            {/* Sub Navigation */}
            <nav className="hidden md:flex md:space-x-6 lg:space-x-8">
              {subNavItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-apple-gray-dark hover:text-apple-black"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Search Icon/Button Placeholder */}
          <div className="flex items-center">
            <a href="#" aria-label="Search Newsroom" className="text-apple-gray-dark hover:text-apple-black">
              {/* Placeholder for Search Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>
            {/* Mobile Menu Button - can be added later if needed */}
            {/* <button className="md:hidden ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu (e.g., hamburger icon) */}
            {/* </button> */}
          </div>
        </div>
        
        {/* Mobile Sub Navigation - Hidden by default, shown on mobile */}
        <nav className="md:hidden border-t border-apple-gray-light">
          <div className="py-3 flex justify-center space-x-6">
            {subNavItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-apple-gray-dark hover:text-apple-black"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NewsroomHeader;
