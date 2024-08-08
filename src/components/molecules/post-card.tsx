import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../atoms/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  featuredImage: string;
  title: string;
  date: string;
  time: number;
  slug: string;
  excerpt: string;
}

const MAX_EXCERPT_LENGTH = 100;

const truncateExcerpt = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const Post = (props: Props) => {
  const date = new Date(props.date);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  const truncatedExcerpt = truncateExcerpt(props.excerpt, MAX_EXCERPT_LENGTH);

  return (
    <Card>
      <Link href={`/${props.slug}/`}>
        <CardHeader>
          <Image
            src={props.featuredImage}
            alt={props.title}
            width={300}
            height={200}
            className="w-full rounded-md mb-4"
          />
          <CardTitle className="text-[1rem]">{props.title}</CardTitle>
          <CardDescription>{truncatedExcerpt}</CardDescription>
          <CardDescription>
            {formattedDate} - {props.time} min read
          </CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default Post;
