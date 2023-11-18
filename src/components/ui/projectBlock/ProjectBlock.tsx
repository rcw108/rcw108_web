'use client'

import { FC, PropsWithChildren } from "react";

import Image from "next/image";

import styles from "./projectBlock.module.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface IProjectBlock {
  id: number;
  image: string;
  title: string;
  description: string;
  web: string;
}

const ProjectBlock: FC<PropsWithChildren<IProjectBlock>> = ({
  id,
  image,
  title,
  description,
  web,
}) => {
  const searchParams = useSearchParams();

  const search = searchParams.getAll('search')

  return (
    <div className={styles.projectWrap}>
      <div className={styles.project}>
        <div className={styles.img}>
          <Image
            src={image}
            alt={title}
            height={"455"}
            width={"660"}
            loading="eager"
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
