import { FC, PropsWithChildren } from "react";

import styles from './headSection.module.scss';
import { Benefit } from "@/interfaces/home.interface";

interface iHeadSection {
    title: string;
    subTitle: string;
    benefits: Benefit[];
}

const HeadSection: FC<PropsWithChildren<iHeadSection>> = ({title, subTitle, benefits}) => {
  return (
    <>
      <section className={styles.headSection}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subTitle}>{subTitle}</h2>
        <div className={styles.wrapper}>
          {benefits.map((item, index) => {
            return (
              <div key={index} className={styles.benefitsItem}>
                <h3 className={styles.benefitsTitle}>{item.title}</h3>
                <div className={styles.benefitsSubtitle}>
                  <h5>{item.number}</h5>
                  <span>{item.subnumber}</span>
                </div>
                <h4 className={styles.benefitsDescr}>{item.text}</h4>
              </div>
            );
          })}
          <a href="#services" id={styles.scroll}>
            <span className={styles.scroll}></span>
          </a>
        </div>
      </section>
    </>
  );
};

export default HeadSection;
