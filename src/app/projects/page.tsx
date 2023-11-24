import Project from "@/components/screens/projects/Project";
import { Metadata } from "next";

async function fetchData() {
  const res = await fetch(
    `https://rcw108.com/wp-json/wp/v2/projects?acf_format=standard`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: 'Projects - RCW108',
}

export default async function Proj() {

  const projects = await fetchData();


  return (
    <>
      {projects && <Project projects={projects}/>}
    </>
  );
}
