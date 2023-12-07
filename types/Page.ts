import { PortableTextBlock } from "sanity";

export type Page = {
    _id: string;
    _createdAt: Dete;
    title: string;
    slug: string;
    content: PortableTextBlock[];
}