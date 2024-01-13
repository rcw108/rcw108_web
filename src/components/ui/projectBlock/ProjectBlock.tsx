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
  slug: string
}

const ProjectBlock: FC<PropsWithChildren<IProjectBlock>> = ({
  id,
  image,
  title,
  description,
  web,
  index,
  slug,
}) => {
  const searchParams = useSearchParams();

  const search = searchParams.getAll("search");

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectRef.current) {
      gsap.from(projectRef.current, {
        opacity: 0,
        duration: 1.5,
        delay: index ? index * 0.1 : 0,
        y: 250,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(projectRef.current, {
              opacity: 1,
              duration: 1.5,
              delay: index ? index * 0.1 : 0,
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
            loading="lazy"
            style={{maxWidth: "100%", height: "100%"}}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title.replace(/&#8211;/g, "-")}</h3>
          <div className={styles.descr}>
            {description.replace(/<\/?p>/g, "")}
          </div>
          <div className={styles.btns}>
            <div className={styles.detail}>
              <Link href={`/projects/${slug}`}>
                <div className={styles.detailText}>View Detail</div>
              </Link>
            </div>
            <div className={styles.web}>
              <a href={web} target="_blank" className={styles.webText}>
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
