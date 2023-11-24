import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./blogItem.module.scss";
import { Post } from "@/interfaces/blog.interface";

const BlogItem: FC<PropsWithChildren<Post | any>> = ({ post }) => {
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
              {post?.excerpt?.rendered.replace(/<\/?p>/g, "")}
            </p>
            <div className={styles.btn}>
              <Link className={styles.link} href={`/blog/${post.id}`}>
                Read more
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogItem;
