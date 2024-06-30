import { HomeIcon, Mail, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaAddressBook } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="mt-20 items-center">
      <hr className="my-6 border-gray-300" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 w-[1200px]">
        <div className="">
          <Image
            src="/logo/logo.jpg"
            alt="Techie Orbit Logo"
            width={100}
            height={100}
          />
          <p className="text-left mt-4">
            Techie Orbit is a blog that provides quality content on technology
            and programming. We aim to provide the best content to our readers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h1 className="text-lg font-semibold">Quick Links</h1>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Legal</h1>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy-policy"> Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-1">
          <h1 className="text-lg font-semibold">Contact Us</h1>
          <ul className="mt-4 space-y-4">
            <li className="flex gap-2">
              <PhoneIcon /> : 123456789
            </li>
            <li className="flex gap-2">
              <MailIcon /> : hello@hasalaabhilasha.me
            </li>
            <li className="flex gap-2">
              <HomeIcon /> : 123456789
            </li>
          </ul>
        </div>
      </div>

      <div className="my-10">
        <p className="text-center">
          &copy; 2024 Techie Orbit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default footer;
