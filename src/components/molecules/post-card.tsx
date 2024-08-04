import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../atoms/Card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  featuredImage: string;
  title: string;
  date: string;
  time: number;
  slug: string;
}

const Post = (props: Props) => {
  const date = new Date(props.date);

  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  return (
    <Card>
      <Link href={`/posts/${props.slug}`}>
        <CardHeader>
          <Image
            src={props.featuredImage}
            alt=""
            width={300}
            height={200}
            className="w-full rounded-md mb-4"
          />
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>
            {formattedDate} - {props.time} min read
          </CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default Post;
