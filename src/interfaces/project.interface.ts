interface ProjectGuid {
  rendered: string;
}

interface ProjectTitle {
  rendered: string;
}

interface ProjectContent {
  rendered: string;
  protected: boolean;
}

interface ProjectExcerpt {
  rendered: string;
  protected: boolean;
}

interface ProjectMeta {
  inline_featured_image: boolean;
  'site-sidebar-layout': string;
  'site-content-layout': string;
  // ... другие свойства
}

interface ProjectInformation {
  number: string;
  subnumber: string;
  text: string;
}

interface ImageSize {
  thumbnail: string;
  'thumbnail-width': number;
  'thumbnail-height': number;
  medium: string;
  'medium-width': number;
  'medium-height': number;
  medium_large: string;
  'medium_large-width': number;
  'medium_large-height': number;
  large: string;
  'large-width': number;
  'large-height': number;
  '1536x1536': string;
  '1536x1536-width': number;
  '1536x1536-height': number;
  '2048x2048': string;
  '2048x2048-width': number;
  '2048x2048-height': number;
}

interface Image {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: ImageSize;
}

interface ITools {
  list: string
}


export interface ProjectACF {
  logo_company: string;
  informations: ProjectInformation[];
  project_hours: string;
  templates: string;
  terms: string;
  title_tas: string;
  description_tas: string;
  image_ts: string;
  website: string;
  title_dv: string;
  description_dv: string;
  image_dv: string;
  text_blocks_dev: boolean;
  title_res: string;
  description_res: string;
  images_res: Image[];
  title_ts: string;
  description_ts: string;
  tools: ITools[];
  title_sup: string;
  description_sup: string;
  subtitle: string;
  text_sup: string;
  link_sup: string;
  image_sup: string;
  title_mn: string;
  text_mn: string;
  images_mn: Image[];
  text_button_mn: string;
  button_link_man: string;
}

interface ProjectLinks {
  self: { href: string }[];
  collection: { href: string }[];
  about: { href: string }[];
  'acf:attachment': { href: string }[][];
  'wp:featuredmedia': { embeddable: boolean; href: string }[][];
  'wp:attachment': { href: string }[][];
  curies: { name: string; href: string; templated: boolean }[][];
}

export interface ProjectData {
  id: number;
  date: string;
  date_gmt: string;
  guid: ProjectGuid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: ProjectTitle;
  content: ProjectContent;
  excerpt: ProjectExcerpt;
  featured_media: number;
  template: string;
  meta: ProjectMeta;
  acf: ProjectACF;
  _links: ProjectLinks;
}
