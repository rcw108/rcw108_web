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

  useEffect(() => {
    if (teamRef.current) {
      gsap.from(teamRef.current, {
        opacity: 0,
        x: "-100%",
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 450",
          onEnter: () => {
            gsap.to(teamRef.current, {
              opacity: 1,
              duration: 2,
              delay: index * 0.2,
              x: 0,
            });
          },
          onLeaveBack: () => {
            gsap.to(teamRef.current, {
              opacity: 0,
              duration: 3,
              delay: index * 0.2,
              x: "-100%",
            });
          },
        },
      });
    }
  }, []);

  return (
    <>
      <div className={styles.teamBlock} ref={teamRef}>
        <div className={styles.img}>
          <Image src={item.img} alt={item.name} width={"400"} height={"390"} />
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
