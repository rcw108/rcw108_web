import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./blogItem.module.scss";
import { Post } from "@/interfaces/blog.interface";

const BlogItem: FC<PropsWithChildren<Post | any>> = ({ post }) => {

  const originalString = post?.excerpt?.rendered.replace(/<\/?p>/g, "").replace(/<\/?span>/g, "").replace(/<\/?a>/g, "").replace(/&raquo;/g, "").replace(/&hellip;/g, "").replace(/<p class="read-more"> <a class="" href="https:\/\/rcw108\.com\/dev\/superfast-wordpress-website-with-next-js\/"> <span class="screen-reader-text">/g, "");

  const descrString = originalString.length > 150 ? `${originalString.slice(0, 150)}...` : originalString


  return (
    <>
      {post && (
        <div className={styles.blogPost}>
          <div className={styles.img}>
            <Image
              src={post.fimg_url && post.fimg_url}
              alt={post.title.rendered}
              width={450}
              height={300}
              priority
              loading="eager"
            ></Image>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{post?.title?.rendered}</h3>
            <p className={styles.descr}>
              {descrString}
            </p>
            <div className={styles.btns}>
              <Link className={styles.btn} href={`/blog/${post.id}`}>
                <span>Read more</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogItem;
