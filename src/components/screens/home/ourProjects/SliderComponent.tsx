import ProjectBlock from "@/components/ui/projectBlock/ProjectBlock";
import { IService } from "@/interfaces/home.interface";
import { ProjectData } from "@/interfaces/project.interface";
import { FC, Key, PropsWithChildren } from "react";
import Slider from "react-slick";

import styles from "./ourProjects.module.scss";

interface IShowed {
  projectsShowed: number[];
  title: string;
  description: string;
  services: IService[];
  btnText: string;
}

const SliderComponent: FC<PropsWithChildren<ProjectData[] | any>> = ({
  showedProjects,
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
  return (
    <div className={styles.sliderWrap} id="sliderWrap">
      <Slider {...settings}>
        {showedProjects &&
          showedProjects.map(
            (item: {
              id: number;
              acf: { image_ts: string; website: string };
              title: { rendered: string };
              excerpt: { rendered: string };
            }, index: number) => {
              return (
                <ProjectBlock
                  index={index}
                  id={item.id}
                  key={item.id}
                  image={item.acf.image_ts}
                  title={item.title.rendered}
                  description={item.excerpt.rendered}
                  web={item.acf.website}
                />
              );
            }
          )}
      </Slider>
    </div>
  );
};

export default SliderComponent;
