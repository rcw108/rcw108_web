import BlogPage from "@/components/screens/blog/Blog";
import { Metadata } from "next";

async function fetchData() {
  const res = await fetch(`https://rcw108.com/wp-json/wp/v2/posts`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Blog - RCW108",
};

export default async function Blog() {
  const posts = await fetchData();

  return <>{posts && <BlogPage posts={posts} />}</>;
}
