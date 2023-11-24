"use client";

import ProjectBlock from "@/components/ui/projectBlock/ProjectBlock";
import ServicesBlock from "@/components/ui/servicesBlock/ServicesBlock";
import { FC, useRef, useEffect } from "react";
import SliderComponent from "./SliderComponent";

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
        x: "100%",
        duration: 2,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(titleRef.current, {
              opacity: 1,
              x: 0,
              duration: 2,
            });
          },
          onLeaveBack: () => {
            gsap.to(titleRef.current, {
              opacity: 0,
              x: "100%",
              duration: 3,
            });
          },
        },
      });
    }

    if (descriptionRef.current) {
      gsap.from(descriptionRef.current, {
        opacity: 0,
        x: "-100%",
        duration: 2,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 85%", // Adjust as needed
          onEnter: () => {
            gsap.to(descriptionRef.current, {
              opacity: 1,
              x: 0,
              duration: 2,
            });
          },
          onLeaveBack: () => {
            gsap.to(descriptionRef.current, {
              opacity: 0,
              x: "-100%",
              duration: 3,
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
      <div className={styles.wrapper}>
        {services &&
          services.map(
            (item: { title: string; img: string }, index: number) => (
              <ServicesBlock key={index} title={item.title} img={item.img} index={index} servicesRef={servicesRef}/>
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
              index={index}
            />
          ))}
      </div>
      <SliderComponent showedProjects={showedProjects} />
      <div className={styles.btns}>
        <div className={styles.button}>
          <span>{btnText}</span>
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
};

export default OurProjects;
