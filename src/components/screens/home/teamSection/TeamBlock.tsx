"use client";

import { TeamMember } from "@/interfaces/home.interface";
import { FC, PropsWithChildren, useRef, useEffect } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./teamSection.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface IteamBlock {
  item: TeamMember;
  index: number;
}

const TeamBlock: FC<PropsWithChildren<IteamBlock>> = ({ item, index }) => {
  const teamRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (teamRef.current) {
  //     gsap.from(teamRef.current, {
  //       opacity: 0,
  //       x: "-100%",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top 50%",
  //         onEnter: () => {
  //           gsap.to(teamRef.current, {
  //             opacity: 1,
  //             duration: 2,
  //             x: 0,
  //           });
  //         },
  //       },
  //     });
  //   }
  // }, []);

  return (
    <>
      <div className={styles.teamBlock} ref={teamRef}>
        <div className={styles.img} ref={triggerRef}>
          <Image src={item.img} alt={item.name} width={"400"} height={"390"} loading="lazy" />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{item.name}</h3>
          <div className={styles.position}>{item.position}</div>
        </div>
      </div>
    </>
  );
};

export default TeamBlock;
