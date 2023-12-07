import { createClient, groq } from "next-sanity"
import clientConfig from "../sanity/config/client-config"
import { Project } from "../types/Project"

export async function getProjects(): Promise<Project[]> {
 
   const projects = await createClient(clientConfig).fetch(
     groq`*[_type =='project']{
       _id,
       _createdAt,
       name,
       "slug": slug.current,
       "image": image.asset->url,
       url,
       content
     }`
   );
 
   console.log("Fetched projects:", projects);
 
   return projects;
};
 
export async function getProject(slug: string): Promise<Project> {
  const project = await createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    {slug}
  );

 return project;
    
}

export async function getPages(): Promise<Page[]> {
  const pages = await createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
  return pages;
}

export async function getPage(slug: string): Promise<Page> {
  const page = await createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    {slug}
  )
  return page;
}