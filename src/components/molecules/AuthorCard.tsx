import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../atoms/card";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

interface Props {
  profileImage: string;
  name: string;
  slug: string;
  bio: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    web?: string;
  };
}

const Author = ({ profileImage, name, slug, bio, socialLinks }: Props) => {
  return (
    <Card className="p-4 shadow-lg rounded-lg">
      <Link href={`authors/${slug}/`}>
        <CardHeader>
          <Image
            src={profileImage}
            alt={`${name}'s profile picture`}
            width={300}
            height={200}
            className="w-full rounded-md mb-4"
          />
          <CardTitle className="text-center text-xl font-semibold">{name}</CardTitle>
        </CardHeader>
      </Link>
      <CardDescription className="mt-2 text-center text-gray-600">{bio}</CardDescription>
      <div className="mt-4 flex justify-center space-x-4">
        {socialLinks.twitter && (
          <Link href={socialLinks.twitter} aria-label={`${name}'s Twitter`}>
            <FaXTwitter />
          </Link>
        )}
        {socialLinks.facebook && (
          <Link href={socialLinks.facebook} aria-label={`${name}'s Facebook`}>
            <FaFacebook />
          </Link>
        )}
        {socialLinks.web && (
          <Link href={socialLinks.web} aria-label={`${name}'s Website`}>
            <AiOutlineGlobal />
          </Link>
        )}
      </div>
    </Card>
  );
};

export default Author;
