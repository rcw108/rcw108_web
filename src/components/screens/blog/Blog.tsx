import { Post } from "@/interfaces/blog.interface";
import { FC, PropsWithChildren } from "react";
import BlogItem from "./blogItem/BlogItem";

import styles from "./blog.module.scss";

const BlogPage: FC<PropsWithChildren<Post[] | any>> = ({ posts }) => {
  return (
    <>
      <div className={styles.postWrapper}>
        <div className="container">
          <div className={styles.wrap}>
            {posts &&
              posts.map((post: Post) => {
                return <BlogItem key={post.id} post={post} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
