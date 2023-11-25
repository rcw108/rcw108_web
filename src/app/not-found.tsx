import ErrorPage from "@/components/screens/404/ErrorPage";

async function fetchData() {
  const res = await fetch("https://dev.rcw108.com/wp-json/wp/v2/options", {
    cache: "force-cache",
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
