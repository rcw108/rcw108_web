"use client";

import { FC, PropsWithChildren, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./teamSection.module.scss";
import { TeamMember } from "@/interfaces/home.interface";
import Slider from "react-slick";
import TeamBlock from "./TeamBlock";

interface ITeamSection {
  team: TeamMember[];
  title: string;
  teamBtn: string;
}

gsap.registerPlugin(ScrollTrigger);

const TeamSection: FC<PropsWithChildren<ITeamSection>> = ({
  team,
  title,
  teamBtn,
}) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const teamRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const teamBlockRef = useRef<HTMLDivElement>(null);

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
          start: "center 70%", // Adjust as needed
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
  }, []);

  return (
    <section className={styles.team} id="team" ref={teamBlockRef}>
      <h2 className={styles.title} ref={titleRef}>
        {title}
      </h2>
      <div className={styles.wrapper} ref={teamRef}>
        {team &&
          team.map((item, index) => {
            return (
              <div key={index} className={styles.teamBlockWrap}>
                <TeamBlock item={item} index={index} />
              </div>
            );
          })}
      </div>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {team &&
            team.map((item, index) => {
              return (
                <div key={index} className={styles.teamBlockWrap}>
                  <div className={styles.teamBlock}>
                    <div className={styles.img}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={"400"}
                        height={"390"}
                        loading="lazy"
                        style={{ maxWidth: "100%", height: "100%" }}
                      />
                    </div>
                    <div className={styles.info}>
                      <h3 className={styles.name}>{item.name}</h3>
                      <div className={styles.position}>{item.position}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
      <div className={styles.btns}>
        <div className={styles.btn}>
          <div className={styles.btnText}>{teamBtn}</div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
