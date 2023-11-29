"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";

import Cookies from "js-cookie";

import styles from "./singleBlog.module.scss";
import { Post } from "@/interfaces/blog.interface";
import Image from "next/image";
import Heart from "./Heart";

interface ISingleBlog {
  post: Post;
  nextPost: Post;
}

const fetchLikes = async ({ id }: { id: number }) => {
  const res = await fetch(`https://rcw108.com/dev/wp-json/wp/v2/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();
  return result.meta.likes_count;
};

const SingleBlog: FC<PropsWithChildren<ISingleBlog>> = ({ post, nextPost }) => {
  const [likes, setLikes] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState(post.meta.likes_count);

  useEffect(() => {
    const liked = Cookies.get(`like_${post.id}`);
    setLikes(liked === "true");

    fetchLikes({ id: post.id }).then((result) => {
      setLikesCount(result);
    });
  }, [likes]);

  const handleSubmit = async () => {
    const response = await fetch("https://rcw108.com/dev/wp-json/wp/v2/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_id: post.id,
      }),
    }).then((res) => res.json());

    if (response) {
      Cookies.set(`like_${post.id}`, "true");
      setLikes(true);
    }
    if (!response) {
      Cookies.remove(`like_${post.id}`);
      setLikes(false);
    }

    setLikesCount(response.likes_count);
  };

  console.log(likes);

  const paragraphRegex = /<p>(.*?)<\/p>/g;
  const headingRegex = /<h2 class="wp-block-heading">(.*?)<\/h2>/g;
  const cleanText = post.content.rendered
    .replace(/&#8216;/g, "")
    .replace(/&#8217;/g, "'");

  // Получаем массив абзацев
  const paragraphs = [];
  let match;

  while ((match = paragraphRegex.exec(cleanText)) !== null) {
    const paragraph = match[1].trim();
    if (paragraph !== "") {
      paragraphs.push(paragraph);
    }
  }

  // Получаем массив заголовков h2
  const headings = [];
  while ((match = headingRegex.exec(cleanText)) !== null) {
    const heading = match[1].trim();
    if (heading !== "") {
      headings.push(heading);
    }
  }

  return (
    <>
      <section className={styles.singlePost}>
        <div className="container">
          <h1 className={styles.title}>{post.title && post.title.rendered}</h1>
          <div className={styles.wrap}>
            <div className={styles.bar}>
              <div className={styles.likes}>
                {likes ? (
                  <span className={`${styles.heart} ${styles.active}`}>
                    <Heart />
                  </span>
                ) : (
                  <span
                    className={`${styles.heart}`}
                    onClick={() => {
                      setLikes(true);
                      handleSubmit();
                    }}
                  >
                    <Heart />
                  </span>
                )}
                <span>{likesCount && likesCount}</span>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src={post.fimg_url}
              width={820}
              height={500}
              alt={post.title.rendered}
            />
          </div>
          <div className={styles.text}>
            <p className={styles.firstText}>{paragraphs[0]}</p>
            <p className={styles.firstText}>{paragraphs[1]}</p>
            <h2>{headings[0]}</h2>
            <p className={styles.firstText}>{paragraphs[2]}</p>
            <p className={styles.firstText}>{paragraphs[3]}</p>
            <p className={styles.firstText}>{paragraphs[4]}</p>
            <h2>{headings[1]}</h2>
            <p className={styles.firstText}>{paragraphs[5]}</p>
            <p className={styles.firstText}>{paragraphs[6]}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
