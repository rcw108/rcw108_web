import { FC, PropsWithChildren } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styles from './servicesSection.module.scss';

interface IServicesSection {
    headlessTitle: string;
    title: string;
    subTitle: string;
    reactImage: string;
    reactImageSecond: string;
    reactImageThird: string;
    btnLink: string;
    btnText: string;
}
const ServicesSection: FC<PropsWithChildren<IServicesSection>> = ({headlessTitle, title, subTitle, reactImage, reactImageSecond, reactImageThird, btnText, btnLink}) => {
    return (
        <>
            <section className={styles.services} id="services">
                <h2 className={styles.title}>{headlessTitle}</h2>
                <h2 className={styles.secondTitle}>{title}</h2>
                <p className={styles.subTitle}>{subTitle}</p>
                <div className={styles.img}>
                    <Image src={reactImage} alt={headlessTitle} width={"400"} height={"250"}/>
                    <Image src={reactImageSecond} alt={headlessTitle} width={70} height={63}/>
                    <Image src={reactImageThird} alt={headlessTitle} width={"370"} height={"370"}/>
                </div>
                <div className={styles.btns}>
                    <div className={styles.btn}><Link href={btnLink}>{btnText}</Link></div>
                </div>
            </section>
        </>
     )
}

export default ServicesSection