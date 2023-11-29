"use client";

import { Post } from "@/interfaces/blog.interface";
import { FC, PropsWithChildren } from "react";
import BlogItem from "./blogItem/BlogItem";

import Slider from "react-slick";

import styles from "./blog.module.scss";

const BlogPage: FC<PropsWithChildren<Post[] | any>> = ({ posts }) => {

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
    <>
      {posts && (
        <div className={styles.postWrapper}>
          <div className="container">
            <div className={styles.wrap}>
              {posts &&
                posts.map((post: Post) => {
                  return <BlogItem key={post.id} post={post} />;
                })}
            </div>

            {posts && (
              <div className={styles.slider}>
                <Slider {...settings}>
                  {posts &&
                    posts.map((post: Post) => {
                      return <BlogItem key={post.id} post={post} />;
                    })}
                </Slider>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
