import ContactUs from "@/components/screens/contact-us/ContactUs"

async function fetchData() {
  const res = await fetch("https://rcw108.com/wp-json/wp/v2/pages/240?acf_format=standard", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ContactPage() {

  const data = await fetchData();

  return (
    <>
      <ContactUs title={data.title} acf={data.acf}/>
    </>
  )
}