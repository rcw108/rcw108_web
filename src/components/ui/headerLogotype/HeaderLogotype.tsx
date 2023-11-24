import { FC } from "react";
import Link from "next/link";

import styles from "./headerLogotype.module.scss";

const HeaderLogotype: FC = () => {
  return (
    <Link href="/">
      <svg
        width="123"
        height="71"
        viewBox="0 0 123 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`${styles.circle} ${styles.circle1}`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.3672 63.3677C50.8312 63.3677 63.3672 50.8316 63.3672 35.3677C63.3672 19.9037 50.8312 7.36768 35.3672 7.36768C19.9032 7.36768 7.36719 19.9037 7.36719 35.3677C7.36719 50.8316 19.9032 63.3677 35.3672 63.3677ZM35.3672 70.3677C54.6972 70.3677 70.3672 54.6976 70.3672 35.3677C70.3672 16.0377 54.6972 0.367676 35.3672 0.367676C16.0372 0.367676 0.367188 16.0377 0.367188 35.3677C0.367188 54.6976 16.0372 70.3677 35.3672 70.3677Z"
          fill="black"
        />
        <path
          className={`${styles.circle} ${styles.circle2}`}
          d="M122.999 35.5C122.999 39.6421 119.641 43 115.499 43C111.357 43 107.999 39.6421 107.999 35.5C107.999 31.3579 111.357 28 115.499 28C119.641 28 122.999 31.3579 122.999 35.5Z"
          fill="black"
        />
        <path
          className={`${styles.circle} ${styles.circle3}`}
          d="M102.999 35.5C102.999 42.9558 96.9549 49 89.499 49C82.0432 49 75.999 42.9558 75.999 35.5C75.999 28.0442 82.0432 22 89.499 22C96.9549 22 102.999 28.0442 102.999 35.5Z"
          fill="black"
        />
      </svg>
    </Link>
  );
};

export default HeaderLogotype;
