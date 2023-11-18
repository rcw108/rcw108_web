import { FC } from 'react'

import styles from './footer.module.scss';

import Link from 'next/link';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
          <div className={styles.block}>
            <div className={styles.content}>
              <div className={styles.logo}>
                {/* <img src="" alt="" /> */}
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