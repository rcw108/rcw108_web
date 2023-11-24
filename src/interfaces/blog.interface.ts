interface Guid {
  rendered: string;
}

interface Title {
  rendered: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Excerpt {
  rendered: string;
  protected: boolean;
}

interface Meta {
  inline_featured_image: boolean;
  site_sidebar_layout: string;
  site_content_layout: string;
  ast_global_header_display: string;
  ast_banner_title_visibility: string;
  ast_main_header_display: string;
  ast_hfb_above_header_display: string;
  ast_hfb_below_header_display: string;
  ast_hfb_mobile_header_display: string;
  site_post_title: string;
  ast_breadcrumbs_content: string;
  ast_featured_img: string;
  footer_sml_layout: string;
  theme_transparent_header_meta: string;
  adv_header_id_meta: string;
  stick_header_meta: string;
  header_above_stick_meta: string;
  header_main_stick_meta: string;
  header_below_stick_meta: string;
  footnotes: string;
}

interface Category {
  [index: number]: number;
}

interface YoastHeadJson {
  title: string;
  robots: {
    index: string;
    follow: string;
    maxSnippet: string;
    maxImagePreview: string;
    maxVideoPreview: string;
  };
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_published_time: string;
  author: string;
  twitter_card: string;
  twitter_misc: {
    "Written by": string;
  };
  schema: {
    "@context": string;
    "@graph": Array<any>;
  };
}

interface Links {
  self: Array<{
    href: string;
  }>;
  collection: Array<{
    href: string;
  }>;
  about: Array<{
    href: string;
  }>;
  author: Array<{
    embeddable: boolean;
    href: string;
  }>;
  replies: Array<{
    embeddable: boolean;
    href: string;
  }>;
  version_history: Array<{
    count: number;
    href: string;
  }>;
  wp_attachment: Array<{
    href: string;
  }>;
  wp_term: Array<{
    taxonomy: string;
    embeddable: boolean;
    href: string;
  }>;
  curies: Array<{
    name: string;
    href: string;
    templated: boolean;
  }>;
}

export interface Post {
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
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: Category;
  tags: Array<any>;
  acf: Array<any>;
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
  fimg_url: string;
  _links: Links;
}
