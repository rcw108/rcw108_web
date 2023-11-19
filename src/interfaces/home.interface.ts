export interface Benefit {
  title: string;
  number: string;
  subnumber: string;
  text: string;
}

export interface IService {
  img: string;
  title: string;
}

export interface Content {
  text: string;
}

export interface TeamMember {
  img: string;
  name: string;
  position: string;
}

export interface Testimonial {
  text: string;
}


export interface HomeData {
  acf: {
    sub_title_h: string;
    title_h: string;
    benefits: Benefit[];
    title_headless: string;
    title_s: string;
    text_s: string;
    react_wordpress_img: string;
    react_wordpress_img_second: string;
    react_wordpress_img_third: string;
    react_wordpress_btn_tx: string;
    react_wordpress_btn_link: string;
    services: IService[];
    title_p: string;
    description_pro: string;
    projects: number[];
    text_circle_p: string;
    link_btn_p: string;
    title_hw: string;
    text_hw: string;
    content_hw: Content[];
    text_circle_tm: string;
    link_circle_hw: string;
    title_team: string;
    team: TeamMember[];
    text_btn_t1: string;
    link_btn_t1: string;
    text_btn_t2: string;
    link_btn_t2: string;
    title_tm: string;
    testimonials: Testimonial[];
  };
}