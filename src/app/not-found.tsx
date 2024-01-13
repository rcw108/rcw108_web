import ErrorPage from "@/components/screens/404/ErrorPage";
import Script from "next/script";

async function fetchData() {
  const res = await fetch("https://rcw108.com/dev/wp-json/wp/v2/options", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function notFound() {
  const { title_ch, text_button, subtitle, link_button } = await fetchData();

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
      {title_ch && (
        <ErrorPage
          title_ch={title_ch}
          text_button={text_button}
          subtitle={subtitle}
          link_button={link_button}
        />
      )}
    </>
  );
}
