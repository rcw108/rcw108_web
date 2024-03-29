"use client";

import ProjectBlock from "@/components/ui/projectBlock/ProjectBlock";
import ServicesBlock from "@/components/ui/servicesBlock/ServicesBlock";
import { FC, useRef, useEffect } from "react";
import SliderComponent from "./SliderComponent";
import Link from "next/link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./ourProjects.module.scss";
import { ProjectData } from "@/interfaces/project.interface";

gsap.registerPlugin(ScrollTrigger);

interface OurProjectsProps {
  title: string;
  description: string;
  services: { title: string; img: string }[];
  projectsShowed: number[];
  projects: ProjectData[];
  btnText: any;
}

const OurProjects: FC<OurProjectsProps> = ({
  title,
  description,
  services,
  projectsShowed,
  projects,
  btnText,
}) => {
  const showedProjects = projectsShowed.map((projId: number) => {
    const showed = projects.find((item: ProjectData) => item.id === projId);
    return showed;
  });

  const titleRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(titleRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }

    if (descriptionRef.current) {
      gsap.from(descriptionRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 70%", // Adjust as needed
          onEnter: () => {
            gsap.to(descriptionRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (servicesRef.current) {
      gsap.from(servicesRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 65%", // Adjust as needed
          onEnter: () => {
            gsap.to(servicesRef.current, {
              opacity: 1,
              x: 0,
              duration: 1,
            });
          },
        },
      });
    }
  }, []);

  return (
    <section className={styles.projects} ref={projectRef}>
      <h2 className={styles.title} ref={titleRef}>
        {title}
      </h2>
      <p className={styles.descr} ref={descriptionRef}>
        {description}
      </p>
      <div className={styles.wrapper} ref={servicesRef}>
        {services &&
          services.map(
            (item: { title: string; img: string }, index: number) => (
              <ServicesBlock
                key={index}
                title={item.title}
                img={item.img}
                index={index}
                servicesRef={servicesRef}
              />
            )
          )}
      </div>
      <div className={styles.wrapperProjects}>
        {showedProjects &&
          showedProjects.map((item: any, index: number) => (
            <ProjectBlock
              key={item.id}
              id={item.id}
              image={item.acf.image_ts}
              title={item.title.rendered}
              description={item.excerpt.rendered}
              web={item.acf.website}
              index={index} slug={item.slug}            />
          ))}
      </div>
      <SliderComponent showedProjects={showedProjects} />
      <div className={styles.btns}>
        <Link href={"/projects"}>
          <div className={styles.button}>
            <span>{btnText}</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default OurProjects;
