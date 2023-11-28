"use client";

import { FC, PropsWithChildren, useRef, useEffect, RefObject } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./servicesBlock.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface IServicesBlock {
  img: string;
  title: string;
  index: number;
  servicesRef: RefObject<HTMLDivElement>;
}

const ServicesBlock: FC<PropsWithChildren<IServicesBlock>> = ({
  img,
  title,
  index,
  servicesRef,
}) => {
  const serviceRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (serviceRef.current) {
  //     gsap.from(serviceRef.current, {
  //       opacity: 0,
  //       duration: 2,
  //       x: -(50 * index),
  //       delay: index * 0.1,
  //       scrollTrigger: {
  //         trigger: serviceRef.current,
  //         start: "top 70%", // Adjust as needed
  //         onEnter: () => {
  //           gsap.to(serviceRef.current, {
  //             opacity: 1,
  //             duration: 2,
  //             x: 0,
  //             delay: index * 0.1,
  //           });
  //         },
  //       },
  //     });
  //   }
  // }, []);

  return (
    <div className={styles.services} ref={serviceRef}>
      <div className={styles.img} >
        <Image src={img} alt={title} width={"60"} height={"60"} loading="lazy" style={{maxWidth: "100%", height: "100%"}}/>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default ServicesBlock;
