import { FC, PropsWithChildren } from 'react'
import Image from 'next/image';

import styles from './servicesBlock.module.scss';

interface IServicesBlock { 
    img: string;
    title: string;
}

const ServicesBlock: FC<PropsWithChildren<IServicesBlock>> = ({img, title}) => {
    return (
        <div className={styles.services}>
            <div className={styles.img}>
                <Image src={img} alt={title} width={"60"} height={"60"}/>
            </div>
            <h3 className={styles.title}>{title}</h3>
        </div>
     )
}

export default ServicesBlock