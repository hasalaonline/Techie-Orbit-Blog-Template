"use client";
import React, { useState } from "react";
import NavBar from "../molecules/nav-bar";
import Image from "next/image";
import Link from "next/link";
import Search from "../molecules/search";
import { Menu, X } from "lucide-react"; // Import icons for menu and close

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full max-w-[1200px] flex justify-between items-center px-4 mx-auto">
        <Link href="/" className="flex justify-center sm:justify-start">
          <Image
            src="/logo/logo.jpg"
            alt="Techie Orbit Logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="hidden sm:block">
          <NavBar />
        </div>

        <div className="hidden sm:block">
          <Search />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 sm:hidden`}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <Link href="/" onClick={toggleMenu}>
              <Image
                src="/logo/logo.jpg"
                alt="Techie Orbit Logo"
                width={50}
                height={50}
              />
            </Link>
            <button onClick={toggleMenu} className="focus:outline-none">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Search />
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
