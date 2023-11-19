export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Contact {
  title: string;
  contact: string;
  link: string;
}

export interface ACF {
  title_cont: string;
  subtitle_cont: string;
  form_cont: string;
  conect_cont: Contact[];
}

export interface YoastHeadJsonRobots {
  index: string;
  follow: string;
  "max-snippet": string;
  "max-image-preview": string;
  "max-video-preview": string;
}

export interface YoastHeadJson {
  title: string;
  robots: YoastHeadJsonRobots;
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_url: string;
  og_site_name: string;
  article_modified_time: string;
  twitter_card: string;
  schema: Record<string, unknown>[];
}

export interface Links {
  self: { href: string }[];
  collection: { href: string }[];
  about: { href: string }[];
  author: { embeddable: boolean; href: string }[];
  replies: { embeddable: boolean; href: string }[];
  version_history: { count: number; href: string }[];
  predecessor_version: { id: number; href: string }[];
  "wp:attachment": { href: string }[];
  curies: { name: string; href: string; templated: boolean }[];
}

export interface ContactPage {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Record<string, string>;
  acf: ACF;
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
  _links: Links;
}
