'use client'

import { FC, PropsWithChildren, useEffect, useState } from "react";

import styles from "./home.module.scss";
import HeadSection from "./headSection/HeadSection";
import { HomeData } from "@/interfaces/home.interface";
import ServicesSection from "./servicesSection/ServicesSection";
import OurProjects from "./ourProjects/OurProjects";
import WorkSection from "./workSection/WorkSection";
import TeamSection from "./teamSection/TeamSection";
import TestimonialsSection from "./testimonialSection/TestimonialsSection";

const Preloader: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className={styles.preloader}>
      Loading...
    </div>
  ) : null;
};

const Home: FC<PropsWithChildren<HomeData>> = ({acf}) => {


  return (
    <>
    <Preloader/>
      <main className={styles.home}>
        <div className="container">
            <HeadSection title={acf.sub_title_h} subTitle={acf.title_h} benefits={acf.benefits}/>
            <ServicesSection title={acf.title_s} headlessTitle={acf.title_headless} subTitle={acf.text_s} reactImage={acf.react_wordpress_img} reactImageSecond={acf.react_wordpress_img_second} reactImageThird={acf.react_wordpress_img_third} btnText={acf.react_wordpress_btn_tx} btnLink={acf.react_wordpress_btn_link}/>
            <OurProjects projectsShowed={acf.projects} title={acf.title_p} description={acf.description_pro} services={acf.services} btnText={acf.text_circle_p.replace(/<br\s*\/?>/g, '')}/>
            <WorkSection title={acf.title_hw} description={acf.text_hw} content={acf.content_hw} btnText={acf.text_circle_tm}/>
            <TeamSection team={acf.team} title={acf.title_team} teamBtn={acf.text_btn_t1}/>
            <TestimonialsSection acf={acf}/>
        </div>
      </main>
    </>
  );
};

export default Home;
