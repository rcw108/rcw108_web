'use client'

import { FC, PropsWithChildren } from "react";

import Slider from "react-slick";

import styles from "./testimonialsSection.module.scss";
import { HomeData } from "@/interfaces/home.interface";



const TestimonialsSection: FC<PropsWithChildren<HomeData>> = (
  {acf}) => {
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

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.wrapper}>
        <Slider {...settings}>
          {acf.testimonials
            ? acf.testimonials.map((item, index) => {
                return (
                  <div key={index} className={styles.slideItem}>
                    {item.text.replace(/<\/?p>/g, "").replace(/&#8216;/g, "'")}
                  </div>
                );
              })
            : null}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
