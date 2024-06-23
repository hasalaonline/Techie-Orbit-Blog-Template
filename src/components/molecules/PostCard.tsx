"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  featuredImage: string;
  title: string;
  date: string;
  time: number;
  slug: string;
}

const Post = (props: Props) => {
  return (
    <>
      <Card>
        <CardHeader>
          <img src={props.featuredImage} alt="" className="w-full rounded-md mb-4" />
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>
            {props.date} - {props.time} min read
          </CardDescription>
          <a href={`/posts/${props.slug}`}>Link</a>
        </CardHeader>
      </Card>
    </>
  );
};

export default Post;
