"use client";
import { FC, PropsWithChildren } from "react";

import styles from "./projects.module.scss";
import { ProjectData } from "@/interfaces/project.interface";
import ProjectBlock from "@/components/ui/projectBlock/ProjectBlock";

import Slider from "react-slick";

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
      />
    ));
  };

  const projectBlocks = projects ? renderProjects(projects.projects) : null;

  return (
    <section className={styles.projectsPage} id="projects">
      <div className="container">
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.descr}>
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
