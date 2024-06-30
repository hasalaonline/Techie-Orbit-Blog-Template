import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

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
    <>
      <Card>
        <Link href={`/posts/${props.slug}`}>
          <CardHeader>
            <img
              src={props.featuredImage}
              alt=""
              className="w-full rounded-md mb-4"
            />
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>
              {formattedDate} - {props.time} min read
            </CardDescription>
          </CardHeader>
        </Link>
      </Card>
    </>
  );
};

export default Post;
