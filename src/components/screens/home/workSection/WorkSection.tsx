"use client";

import { FC, PropsWithChildren, useRef, useEffect } from "react";

import styles from "./workSection.module.scss";
import { Content } from "@/interfaces/home.interface";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
        duration: 2,
        x: "-100%",
        scrollTrigger: {
          trigger: worksRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(titleRef.current, {
              opacity: 1,
              duration: 2,
              x: 0,
            });
          },
          onLeaveBack: () => {
            gsap.to(titleRef.current, {
              opacity: 0,
              duration: 3,
              x: "-100%",
            });
          },
        },
      });
    }

    if (descrRef.current) {
      gsap.from(descrRef.current, {
        opacity: 0,
        duration: 2,
        x: "100%",
        scrollTrigger: {
          trigger: worksRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(descrRef.current, {
              opacity: 1,
              duration: 2,
              x: 0,
            });
          },
          onLeaveBack: () => {
            gsap.to(descrRef.current, {
              opacity: 0,
              duration: 3,
              x: "100%",
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
          {btnText.replace(/<br\s*\/?>/g, "")}{" "}
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

export default WorkSection;
