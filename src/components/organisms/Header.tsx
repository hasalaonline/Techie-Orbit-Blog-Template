"use client";
import React from "react";
import NavBar from "../molecules/nav-bar";
import Image from "next/image";
import Link from "next/link";
import Search from "../molecules/search";

const Header = () => {
  return (
    <>
      <header className="w-[1200px] grid gap-20 grid-cols-3 mx-auto">
        <Link href="/">
          <Image
            src="/logo/logo.jpg"
            alt="Techie Orbit Logo"
            width={100}
            height={100}
          />
        </Link>
        <NavBar />
        <Search />
      </header>
    </>
  );
};

export default Header;
