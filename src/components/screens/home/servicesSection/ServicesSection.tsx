import { FC, PropsWithChildren } from 'react'
import Image from 'next/image';

import styles from './servicesSection.module.scss';

interface IServicesSection {
    headlessTitle: string;
    title: string;
    subTitle: string;
    reactImage: string;
}

const ServicesSection: FC<PropsWithChildren<IServicesSection>> = ({headlessTitle, title, subTitle, reactImage}) => {
    return (
        <>
            <section className={styles.services} id="services">
                <h2 className={styles.title}>{headlessTitle}</h2>
                <h2 className={styles.secondTitle}>{title}</h2>
                <p className={styles.subTitle}>{subTitle}</p>
                <div className={styles.img}>
                    <Image src={reactImage} alt={headlessTitle} width={"600"} height={"400"}/>
                </div>
            </section>
        </>
     )
}

export default ServicesSection