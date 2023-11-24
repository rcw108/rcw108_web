import ContactUs from "@/components/screens/contact-us/ContactUs";
import { Metadata } from "next";

async function fetchData() {
  const res = await fetch(
    "https://rcw108.com/wp-json/wp/v2/pages/240?acf_format=standard",
    {
      next: { revalidate: 3600 },
    }
  );

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
    `https://rcw108.com/wp-json/wp/v2/pages/240?acf_format=standard`
  ).then((res) => res.json());
  const meta = await product;

  const grapthWeb = meta?.yoast_head_json?.schema["@graph"].find(
    (item: { [x: string]: string }) => item["@type"] === "WebSite"
  );

  if (product) {
    return {
      title: meta?.yoast_head_json?.title || "RCW108",
      description: (grapthWeb ? grapthWeb?.description : "RCW108") || "RCW108",
      openGraph: {
        images: "https://rcw108.com/wp-content/uploads/2022/04/cropped-Group-46-1.png",
        // title:
        //   meta?.yoast_head_json?.og_title || meta.title.rendered || "RCW108",
        // description: (grapthWeb ? grapthWeb?.description : "RCW108") || "RCW108",
        // url: meta?.yoast_head_json?.og_url || "https://rcw108.com/",
        // siteName: (grapthWeb ? grapthWeb?.name : "RCW108") || "RCW108",
        // locale: meta?.yoast_head_json?.og_locale || "en_US",
        // type: meta?.yoast_head_json?.og_type || "website",
      },
      // robots: {
      //   index:
      //     (meta?.yoast_head_json?.robots?.index === "noindex" ? false : true) ||
      //     true,
      //   follow:
      //     (meta?.yoast_head_json?.robots?.follow === "nofollow"
      //       ? false
      //       : true) || true,
      //   googleBot: {
      //     index:
      //       (meta?.yoast_head_json?.robots?.index === "noindex"
      //         ? false
      //         : true) || true,
      //     follow:
      //       (meta?.yoast_head_json.robots?.follow === "nofollow"
      //         ? false
      //         : true) || true,
      //     "max-video-preview": -1,
      //     "max-image-preview":
      //       meta?.yoast_head_json?.robots["max-image-preview"] ===
      //       "max-image-preview:large"
      //         ? "large"
      //         : meta?.yoast_head_json?.robots["max-image-preview"] ===
      //           "max-image-preview:none"
      //         ? "none"
      //         : "standard",
      //     "max-snippet": -1,
      //   },
      // },

      icons: {
        icon: "https://rcw108.com/wp-content/uploads/2022/04/cropped-Group-46-1.png",
        shortcut:
          "https://rcw108.com/wp-content/uploads/2022/04/cropped-Group-46-1.png",
        apple:
          "https://rcw108.com/wp-content/uploads/2022/04/cropped-Group-46-1.png",
        other: {
          rel: "apple-touch-icon-precomposed",
          url: "https://rcw108.com/wp-content/uploads/2022/04/cropped-Group-46-1.png",
        },
      },
    };
  } else {
    return {
      title: "RCW108",
      description: "RCW108",
    }
  }
}

export default async function ContactPage() {
  const data = await fetchData();

  return <>{data && <ContactUs title={data.title} acf={data.acf} />}</>;
}
