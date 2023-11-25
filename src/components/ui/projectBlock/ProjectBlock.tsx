"use client";

import { FC, PropsWithChildren, useRef, useEffect } from "react";

import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./projectBlock.module.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

interface IProjectBlock {
  id: number;
  image: string;
  title: string;
  description: string;
  web: string;
  index: number;
}

const ProjectBlock: FC<PropsWithChildren<IProjectBlock>> = ({
  id,
  image,
  title,
  description,
  web,
  index,
}) => {
  const searchParams = useSearchParams();

  const search = searchParams.getAll("search");

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectRef.current) {
      gsap.from(projectRef.current, {
        opacity: 0,
        duration: 2,
        delay: index ? index * 0.15 : 0,
        y: "100%",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 1600", // Adjust as needed
          onEnter: () => {
            gsap.to(projectRef.current, {
              opacity: 1,
              duration: 2,
              delay: index ? index * 0.15 : 0,
              y: 0,
            });
          },
        },
      });
    }
  }, []);

  return (
    <div className={styles.projectWrap}>
      <div className={styles.project} ref={projectRef}>
        <div className={styles.img}>
          <Image
            src={image}
            alt={title}
            height={"455"}
            width={430}
            priority
            loading="eager"
            style={{maxWidth: "100%", height: "100%"}}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.descr}>
            {description.replace(/<\/?p>/g, "")}
          </div>
          <div className={styles.btns}>
            <div className={styles.detail}>
              <Link href={`/projects/${id}`}>
                <div className={styles.detailText}>View Detail</div>
              </Link>
            </div>
            <div className={styles.web}>
              <a href={web} className={styles.webText}>
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
