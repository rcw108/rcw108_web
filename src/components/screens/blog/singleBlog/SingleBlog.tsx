import { FC, PropsWithChildren } from 'react'

import styles from './singleBlog.module.scss';
import { Post } from '@/interfaces/blog.interface';

interface ISingleBlog { 
    post: Post | any
}

const SingleBlog: FC<PropsWithChildren<ISingleBlog>> = ({post}) => {
  return <div>SingleBlog</div>
}

export default SingleBlog