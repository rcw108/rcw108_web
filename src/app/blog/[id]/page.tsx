import SingleBlog from "@/components/screens/blog/singleBlog/SingleBlog";
import { Post } from "@/interfaces/blog.interface";
import { GetStaticPaths, Metadata, ResolvingMetadata } from "next";
import Script from 'next/script'

// export async function generateStaticParams(): Promise<{ id: string }[]> {
//   const staticParams = [
//     { id: "453" },
//   ];
//   return staticParams;
// }

async function fetchData({ id }: { id: string }) {
  const res = await fetch(`https://rcw108.com/dev/wp-json/wp/v2/posts/${id}`, {
    next: { revalidate: 360 },
    headers: {
      "Cache-Control": "public, max-age=31536000",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function fetchAllPostData() {
  const res = await fetch(`https://rcw108.com/dev/wp-json/wp/v2/posts/`, {
    next: { revalidate: 360 },
    headers: {
      "Cache-Control": "public, max-age=31536000",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await fetch(
    `https://rcw108.com/dev/wp-json/wp/v2/posts/${params.id}`,
    { next: { revalidate: 360 } }
  ).then((res) => res.json());
  const meta = await product;

  const grapthWeb = meta?.yoast_head_json?.schema["@graph"].find(
    (item: { [x: string]: string }) => item["@type"] === "WebSite"
  );

  return {
    title: meta?.yoast_head_json?.title,
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

export default async function SingleProject({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await fetchData({ id });

  const nextPost = await fetchAllPostData();

  const nextShowedPost = nextPost.filter((item: Post) => item.id !== data.id);

  const randomIndex: number = Math.floor(Math.random() * nextShowedPost.length);
  const randomPost: Post = nextShowedPost[randomIndex];

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
      {data && nextPost && <SingleBlog post={data} nextPost={randomPost} />}
    </>
  );
}
