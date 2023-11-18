import Menu from "./Menu";

async function fetchData() {
  const res = await fetch("https://rcw108.com/wp-json/wp/v2/menus", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Navigation() {
  const menu = await fetchData();


  return (
    <>
      <Menu menu={menu}/>
    </>
  );
}
