"use client";

import { FC, PropsWithChildren, useEffect, useRef } from "react";

import Slider from "react-slick";

import styles from "./testimonialsSection.module.scss";
import { HomeData } from "@/interfaces/home.interface";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection: FC<PropsWithChildren<HomeData>> = ({ acf }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider",
  };

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.from(sliderRef.current, {
        opacity: 0,
        duration: 2,
        y: 150,
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(sliderRef.current, {
              opacity: 1,
              duration: 2,
              y: 0,
            });
          },
        },
      });
    }
  }, []);

  return (
    <section className={styles.testimonials} id="testimonials" ref={sliderRef}>
      <div className={styles.wrapper}>
        <Slider {...settings}>
          {acf.testimonials &&
            acf.testimonials.map((item, index) => {
              return (
                <div key={index} className={styles.slideItem}>
                  {item.text.replace(/<\/?p>/g, "").replace(/&#8216;/g, "'")}
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
