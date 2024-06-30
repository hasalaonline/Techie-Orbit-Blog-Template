import { Author, Nullable } from "@tryghost/content-api";

export interface Post {
  title?: string | undefined;
  featuredImage?: Nullable<string>  | undefined;
  date?: Nullable<string> | undefined;
  content?: Nullable<string> | undefined;
  authors?: Author[] | undefined;
}
