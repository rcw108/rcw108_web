"use client";
import { FC, PropsWithChildren, useEffect, useRef } from "react";

import styles from "./projects.module.scss";
import { ProjectData } from "@/interfaces/project.interface";
import ProjectBlock from "@/components/ui/projectBlock/ProjectBlock";

import Slider from "react-slick";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project: FC<PropsWithChildren<ProjectData[] | any>> = (projects) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderProjects = (projects: ProjectData[]) => {
    return projects.map((item: ProjectData, index: number) => (
      <ProjectBlock
        index={index}
        key={item.id}
        id={item.id}
        image={item.acf.image_ts}
        title={item.title.rendered}
        description={item.excerpt.rendered}
        web={item.acf.website}
        slug={item.slug}
      />
    ));
  };

  const titleRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 75%",
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
    if (subTitleRef.current) {
      gsap.from(subTitleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: subTitleRef.current,
          start: "top 100%",
          onEnter: () => {
            gsap.to(subTitleRef.current, {
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
  }, []);

  const projectBlocks = projects ? renderProjects(projects.projects) : null;

  return (
    <section className={styles.projectsPage} id="projects">
      <div className="container">
        <h2 className={styles.title} ref={titleRef}>Projects</h2>
        <p className={styles.descr} ref={subTitleRef}>
          These projects successfully develop the businesses of our clients. The
          website is the face of your business.
        </p>
        <div className={styles.wrapper}>{projectBlocks}</div>
        <div className={styles.wrapperSlider}>
          <Slider {...settings}>{projectBlocks}</Slider>
        </div>
      </div>
    </section>
  );
};

export default Project;
