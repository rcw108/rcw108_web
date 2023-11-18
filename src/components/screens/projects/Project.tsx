"use client"
import { FC, PropsWithChildren } from "react";

import styles from "./projects.module.scss";
import { ProjectData } from "@/interfaces/project.interface";
import ProjectBlock from "@/components/ui/projectBlock/ProjectBlock";


const Project: FC<PropsWithChildren<ProjectData[] | any>> = (projects) => {

  return (
    <div className={styles.wrapper}>
      {projects
        ? projects.projects.map((item: ProjectData) => {
            return (
              <ProjectBlock
                key={item.id}
                id={item.id}
                image={item.acf.image_ts}
                title={item.title.rendered}
                description={item.excerpt.rendered}
                web={item.acf.website}
              />
            );
          })
        : null}
    </div>
  );
};

export default Project;
