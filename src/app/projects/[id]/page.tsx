import Project from "@/components/screens/projects/Project";
import ProjectS from "@/components/screens/projects/singleProject/ProjectS";
import { ProjectData } from "@/interfaces/project.interface";
import { Metadata, ResolvingMetadata } from "next";

async function fetchData({ params }: { params: { id: string } }) {
  const res = await fetch(
    `http://rcw108.com/wp-json/wp/v2/projects/${params.id}?acf_format=standard`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function fetchAllPostData() {
  const res = await fetch(
    `http://rcw108.com/wp-json/wp/v2/projects?acf_format=standard`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata(
  { params }: { params: { id: string } },
): Promise<Metadata> {

  const product = await fetch(`http://rcw108.com/wp-json/wp/v2/projects/${params.id}?acf_format=standard`).then((res) =>
    res.json()
  );
  const meta = await product

  return {
    title: meta?.yoast_head_json?.title,
    description: meta?.yoast_head_json?.description,
    openGraph: {
      images: meta?.yoast_head_json?.og_image[0].url
    }
  };
}

export default async function SingleProject({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetchData({ params });

  const nextPost = await fetchAllPostData();

  const nextShowedPost = nextPost.filter(
    (item: ProjectData) => item.id !== data.id
  );

  const randomIndex: number = Math.floor(Math.random() * nextShowedPost.length);
  const randomProject: ProjectData = nextShowedPost[randomIndex];

  return (
    <>
      <ProjectS project={data} nextProj={randomProject} />
    </>
  );
}
