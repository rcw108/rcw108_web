"use client";

import { FC, PropsWithChildren, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./servicesSection.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface IServicesSection {
  headlessTitle: string;
  title: string;
  subTitle: string;
  reactImage: string;
  reactImageSecond: string;
  reactImageThird: string;
  btnLink: string;
  btnText: string;
}
const ServicesSection: FC<PropsWithChildren<IServicesSection>> = ({
  headlessTitle,
  title,
  subTitle,
  reactImage,
  reactImageSecond,
  reactImageThird,
  btnText,
  btnLink,
}) => {
  const boldRegex = /<strong>(.*?)<\/strong>/g;

  const strongTitle = subTitle.split(boldRegex).map((part, index) => {
    if (part.match(boldRegex)) {
      return <span key={index}>{part.replace(/<\/?strong>/g, "")}</span>;
    }
    return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const secondTitleRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        scale: 0.05,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%", // Adjust as needed
          onEnter: () => {
            gsap.to(titleRef.current, {
              opacity: 1,
              scale: 1,
              duration: 2,
            });
          },
          onLeaveBack: () => {
            gsap.to(titleRef.current, {
              opacity: 0,
              scale: 0.05,
              duration: 2,
            });
          },
        },
      });
    }
    if (secondTitleRef.current) {
      gsap.from(secondTitleRef.current, {
        opacity: 0,
        duration: 1.5,
        x: 450,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Adjust as needed
          onEnter: () => {
            gsap.to(secondTitleRef.current, {
              opacity: 1,
              x: 0,
              duration: 1.5,
            });
          },
          onLeaveBack: () => {
            gsap.to(secondTitleRef.current, {
              opacity: 0,
              x: 450,
              duration: 1.5,
            });
          },
        },
      });
    }
    if (subTitleRef.current) {
      gsap.from(subTitleRef.current, {
        opacity: 0,
        duration: 1.5,
        y: 150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%", // Adjust as needed
          onEnter: () => {
            gsap.to(subTitleRef.current, {
              opacity: 1,
              y: 0,
              duration: 1.5,
            });
          },
          onLeaveBack: () => {
            gsap.to(subTitleRef.current, {
              opacity: 0,
              y: 150,
              duration: 1.5,
            });
          },
        },
      });
    }
    if (imagesRef.current) {
      gsap.from(imagesRef.current, {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%", // Adjust as needed
          onEnter: () => {
            gsap.to(imagesRef.current, {
              opacity: 1,
              duration: 2,
            });
          },
          onLeaveBack: () => {
            gsap.to(imagesRef.current, {
              opacity: 0,
              duration: 2,
            });
          },
        },
      });
    }
  }, []);

  return (
    <>
      <section className={styles.services} id="services" ref={sectionRef}>
        <h2 className={styles.title} ref={titleRef}>
          {headlessTitle}
        </h2>
        <h2 className={styles.secondTitle} ref={secondTitleRef}>
          {title}
        </h2>
        <p className={styles.subTitle} ref={subTitleRef}>
          {strongTitle}
        </p>
        <div className={styles.img} ref={imagesRef}>
          <Image
            src={reactImage}
            alt={headlessTitle}
            width={"400"}
            height={"250"}
            priority
            style={{maxWidth: "70%", height: "100%"}}
          />
          <Image
            src={reactImageSecond}
            alt={headlessTitle}
            width={70}
            height={63}
            priority
            className={styles.heart}
            style={{maxWidth: "100%", height: "100%"}}
          />
          <Image
            src={reactImageThird}
            alt={headlessTitle}
            width={"370"}
            height={"370"}
            priority
            style={{maxWidth: "80%", height: "100%"}}
          />
        </div>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <Link href={btnLink}>{btnText}</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
