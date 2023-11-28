'use client';

import { FC , useRef, useEffect} from 'react'

import styles from './footer.module.scss';

import Link from 'next/link';
import HeaderLogotype from '@/components/ui/headerLogotype/HeaderLogotype';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer: FC = () => {

  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.from(footerRef.current, {
        opacity: 0,
        x: 15,
        y: 30, 
        scale:0.6,
        transformOrigin: "center center", 
        duration: 1.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          onEnter: () => {
            gsap.to(footerRef.current, {
              opacity: 1,
              duration: 1.2,
              x: 0,
              y: 0, 
              scale: 1, 
            });
          },
        },
      });
    }
  },[])

    return (
        <footer className={styles.footer} ref={footerRef}>
          <div className={styles.block}>
            <div className={styles.content}>
              <div className={styles.logo}>
                <HeaderLogotype/>
              </div>
              <div className={styles.title}>
                <h2>RCW 108</h2>
                <h3>star-forming region</h3>
              </div>
              <div className={styles.contact}>
                <Link href="/contact-us"><div className={styles.btn}><span>Contact Us</span></div></Link>
              </div>
            </div>
          </div>
          <div className={styles.last}>
            <h4>© RCW 108 Stydio 2023</h4>
          </div>
        </footer>
      );
}

export default Footer