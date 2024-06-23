import React from "react";
import NavBar from "../molecules/MainNav";
import { Input } from "../ui/input";

const Header = () => {
  return (
    <>
        <header className="grid gap-20 grid-cols-3">
            <img src="logo/logo.jpg" alt="Techie Orbit Logo" className="w-1/4"/>
            <NavBar />
            <Input type="text" placeholder="Search" className="w-80 mt-8 "/>
        </header>
    </>
  );
};

export default Header;
