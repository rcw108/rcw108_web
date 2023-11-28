"use client";

import { FC, PropsWithChildren, useRef, useEffect } from "react";

import styles from "./headSection.module.scss";
import { Benefit } from "@/interfaces/home.interface";

import { gsap } from "gsap";

interface iHeadSection {
  title: string;
  subTitle: string;
  benefits: Benefit[];
  second_title: string;
}

const HeadSection: FC<PropsWithChildren<iHeadSection>> = ({
  title,
  subTitle,
  benefits,
  second_title,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLHeadingElement>(null);
  const secondTitleRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, { opacity: 1, duration: 1, delay: 1.1 });
    }
    if (secondTitleRef.current) {
      gsap.to(secondTitleRef.current, { opacity: 1, duration: 1, delay: 1.3 });
    }
    if (subTitleRef.current) {
      gsap.from(subTitleRef.current, { scale: 0.05, opacity: 0, duration: 1 });

      gsap.to(subTitleRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.5,
      });
    }
    if (wrapperRef.current) {
      gsap.from(wrapperRef.current, { opacity: 0, y: 150, delay: 1.3,});

      gsap.to(wrapperRef.current, {
        opacity: 1,
        duration: 1.3,
        delay: 1.4,
        y: "0%",
      });
    }
  }, []);

  return (
    <>
      <section className={styles.headSection}>
        <h1 className={styles.title} ref={titleRef}>
          {title}
        </h1>
        <h3 className={styles.secondTitle} ref={secondTitleRef}>
          {second_title}
        </h3>
        <h2 className={styles.subTitle} ref={subTitleRef}>
          {subTitle}
        </h2>
        <div className={styles.wrapper} ref={wrapperRef}>
          {benefits &&
            benefits.map((item, index) => {
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
