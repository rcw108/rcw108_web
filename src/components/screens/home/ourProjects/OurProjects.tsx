import { useEffect, useState } from "react";
import Our from "./Our";
import { IService } from "@/interfaces/home.interface";

interface IShowed {
  projectsShowed: number[];
  title: string;
  description: string;
  services: IService[];
  btnText: any;
}

export default function OurProjects({
  title,
  description,
  services,
  btnText,
  projectsShowed,
}: IShowed) {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rcw108.com/dev/wp-json/wp/v2/projects?acf_format=standard"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount


  return (
    <>
      {projects.length > 0 && (
        <Our
          title={title}
          description={description}
          services={services}
          btnText={btnText}
          projectsShowed={projectsShowed}
          projects={projects}
        />
      )}
    </>
  );
}
