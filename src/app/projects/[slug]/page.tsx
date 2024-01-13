import Project from "@/components/screens/projects/Project";
import ProjectS from "@/components/screens/projects/singleProject/ProjectS";
import { ProjectData } from "@/interfaces/project.interface";
import { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export async function generateStaticParams(): Promise<{ id: string }[]> {
//   const staticParams = [
//     { id: "338" },
//     { id: "283" },
//     { id: "76" },
//     { id: "70" },
//     { id: "462" },
//   ];
//   return staticParams;
// }

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
) {
  const slug = params.slug;
  const product = await fetch(
    `http://rcw108.com/dev/wp-json/wp/v2/projects/?slug=${slug}&acf_format=standard`
  );

  if (!product.ok) {
    throw new Error("Failed to fetch metadata");
  }

  const metaS = await product.json();

  const meta = metaS[0];

  const grapthWeb = meta?.yoast_head_json?.schema["@graph"].find(
    (item: { [x: string]: string }) => item["@type"] === "WebSite"
  );

  if (meta) {
    return {
      title: meta.yoast_head_json.title,
      description: grapthWeb ? grapthWeb.description : "RCW108",
      // openGraph: {
      //   images: meta?.yoast_head_json?.og_image[0].url,
      //   title: meta?.yoast_head_json?.og_title || meta.title.rendered || "RCW108",
      //   description: grapthWeb ? grapthWeb.description : "RCW108",
      //   url: meta?.yoast_head_json?.og_url || "https://rcw108.com/",
      //   siteName: grapthWeb ? grapthWeb.name : "RCW108",
      //   locale: meta?.yoast_head_json?.og_locale || "en_US",
      //   type: meta?.yoast_head_json?.og_type || "website",
      // },
      // robots: {
      //   index: meta?.yoast_head_json?.robots?.index === "noindex" ? false : true,
      //   follow:
      //     meta?.yoast_head_json?.robots?.follow === "nofollow" ? false : true,
      //   googleBot: {
      //     index:
      //       meta?.yoast_head_json?.robots?.index === "noindex" ? false : true,
      //     follow:
      //       meta?.yoast_head_json.robots?.follow === "nofollow" ? false : true,
      //     "max-video-preview":
      //       meta?.yoast_head_json?.robots?.max_video_preview ===
      //       "max-video-preview:-1"
      //         ? -1
      //         : -1,
      //     "max-image-preview":
      //       meta?.yoast_head_json?.robots["max-image-preview"] ===
      //       "max-image-preview:large"
      //         ? "large"
      //         : meta?.yoast_head_json?.robots["max-image-preview"] ===
      //           "max-image-preview:none"
      //         ? "none"
      //         : "standard",
      //     "max-snippet":
      //       meta?.yoast_head_json?.robots["max-snippet"] === "max-snippet:-1"
      //         ? -1
      //         : -1,
      //   },
      // },
      // alternates: {
      //   canonical: meta?.yoast_head_json?.canonical
      //     ? meta?.yoast_head_json?.canonical
      //     : "",
      // },
      icons: {
        icon: "https://rcw108.com/dev/wp-content/uploads/2022/04/cropped-Group-46-1.png",
        shortcut:
          "https://rcw108.com/dev/wp-content/uploads/2022/04/cropped-Group-46-1.png",
        apple:
          "https://rcw108.com/dev/wp-content/uploads/2022/04/cropped-Group-46-1.png",
        other: {
          rel: "apple-touch-icon-precomposed",
          url: "https://rcw108.com/dev/wp-content/uploads/2022/04/cropped-Group-46-1.png",
        },
      },
    };
  }
}

async function fetchData({ slug }: { slug: string }) {
  const res = await fetch(
    `https://rcw108.com/dev/wp-json/wp/v2/projects/?slug=${slug}&acf_format=standard`,
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

  const response = await res.json();

  return response[0];
}

async function fetchAllPostData() {
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

export default async function SingleProject({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await fetchData({ slug });

  const nextPost = await fetchAllPostData();

  const nextShowedPost = nextPost.filter((item: ProjectData) => {
    return item.slug !== data.slug;
  });

  const randomIndex: number = Math.floor(Math.random() * nextShowedPost.length);
  const randomProject: ProjectData = nextShowedPost[randomIndex];

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
      {data && nextPost && <ProjectS project={data} nextProj={randomProject} />}
    </>
  );
}
