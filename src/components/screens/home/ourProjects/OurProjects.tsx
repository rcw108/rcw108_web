import { FC } from "react";

import styles from "./ourProjects.module.scss";

import { ProjectData } from "@/interfaces/project.interface";
import { IService } from "@/interfaces/home.interface";
import ServicesBlock from "@/components/ui/servicesBlock/ServicesBlock";
import ProjectBlock from "@/components/ui/projectBlock/ProjectBlock";

async function fetchData() {
  const res = await fetch(
    "http://rcw108.com/wp-json/wp/v2/projects?acf_format=standard",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IShowed {
  projectsShowed: number[];
  title: string;
  description: string;
  services: IService[],
  btnText: string
}

export default async function OurProjects({title, description, services, btnText, projectsShowed }: IShowed) {
  const projects = await fetchData();

  const showedProjects = projectsShowed.map((projId: number) => {
    const showed = projects.find((item: ProjectData) => item.id === projId);
    return showed;
  });

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.descr}>{description}</p>
      <div className={styles.wrapper}>
        {services.map((item, index) => {
          return (
            <ServicesBlock key={index} title={item.title} img={item.img} />
          );
        })}
      </div>
      <div className={styles.wrapperProjects}>
        {showedProjects ? (
          showedProjects.map((item) => {
            return (
              <ProjectBlock
                id={item.id}
                key={item.id}
                image={item.acf.image_ts}
                title={item.title.rendered}
                description={item.excerpt.rendered}
                web={item.acf.website}
              />
            );
          })
        ) : (
          <h4>Load</h4>
        )}
      </div>
      <div className={styles.btns}>
        <div className={styles.button}>
          {btnText}
          <svg
            version="1.1"
            className={styles.circleSvg1}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 149.955 149.955"
            xmlSpace="preserve"
          >
            <path
              d="M149.945,98.318l-0.906-93.803c-0.022-2.072-1.7-3.75-3.772-3.765L51.634,0l-0.06,7.603l84.735,0.679
        L0.011,144.579l5.376,5.376L141.525,13.817l0.816,84.575L149.945,98.318z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
