"use client";

import { FC, PropsWithChildren, useRef, useEffect } from "react";

import styles from "./workSection.module.scss";
import { Content } from "@/interfaces/home.interface";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

interface IWorkSection {
  content: Content[];
  btnText: string;
  title: string;
  description: string;
}

gsap.registerPlugin(ScrollTrigger);

const WorkSection: FC<PropsWithChildren<IWorkSection>> = ({
  content,
  btnText,
  title,
  description,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const descrRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

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
          start: "bottom -1100",
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

    if (descrRef.current) {
      gsap.from(descrRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left", 
        duration: 1,
        scrollTrigger: {
          trigger: descrRef.current,
          start: "bottom -1100",
          onEnter: () => {
            gsap.to(descrRef.current, {
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
    if (workRef.current) {
      gsap.from(workRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left", 
        duration: 1,
        scrollTrigger: {
          trigger: workRef.current,
          start: "bottom -1100",
          onEnter: () => {
            gsap.to(workRef.current, {
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

  return (
    <section className={styles.works} ref={worksRef}>
      <h2 className={styles.title} ref={titleRef}>
        {title}
      </h2>
      <div className={styles.descr} ref={descrRef}>
        {description}
      </div>
      <div className={styles.wrapper} ref={workRef}>
        {content &&
          content.map((item, index) => {
            const h4ContentMatch = item?.text?.match(/<h4>(.*?)<\/h4>/);
            const h4Content = h4ContentMatch ? h4ContentMatch[1] : "";
            const arr = item.text.match(/<li>(.*?)<\/li>/g);

            const head = h4Content.replace(/<[^>]*>/g, "").split(" ")[0];

            return (
              <div key={index + 100} className={styles.contentWrap}>
                <h4 className={styles.contentTitle}>{head}</h4>
                <ul className={styles.list}>
                  {arr &&
                    arr.map((item, index) => {
                      return (
                        <li key={index} className={styles.listItem}>
                          {item.replace(/<li[^>]*>(.*?)<\/li>/, "$1")}
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
      </div>
      <div className={styles.btns}>
        <div className={styles.button}>
          <Link href="/contact-us"><span>{btnText.replace(/<br\s*\/?>/g, "")}{" "}</span></Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
