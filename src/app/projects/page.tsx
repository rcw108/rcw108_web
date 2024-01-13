import Project from "@/components/screens/projects/Project";
import { Metadata } from "next";
import Script from "next/script";

async function fetchData() {
  const res = await fetch(
    `https://rcw108.com/dev/wp-json/wp/v2/projects?acf_format=standard`,
    {
      next: { revalidate: 360 },
      headers: {
        "Cache-Control": "public, max-age=31536000",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Projects - RCW108",
};

export default async function Proj() {
  const projects = await fetchData();

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GVC6XM8JN0" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-GVC6XM8JN0');
        `}
      </Script>
      {projects && <Project projects={projects} />}
    </>
  );
}
