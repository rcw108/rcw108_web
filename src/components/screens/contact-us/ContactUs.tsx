import { FC, PropsWithChildren } from "react";
import Link from "next/link";

import styles from "./contactUs.module.scss";
import { ACF } from "@/interfaces/contact.interface";
import Form from "./form/Form";

interface IContacts {
  title: { rendered: string };
  acf: ACF;
}

const ContactUs: FC<PropsWithChildren<IContacts>> = ({ title, acf }) => {
  const originalString = acf.subtitle_cont;
  const splitStrings = originalString.split("?");

  const firstPart = splitStrings[0].trim(); // "Have a project"
  const secondPart = splitStrings[1].trim(); // "Let's create together!"

  return (
    <section className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>{title.rendered}</h2>
        <div className={styles.subTitle}>
          <h4>{`${firstPart}?`}</h4>
          <h4>{secondPart.replace(/<\/?br>/g, "")}</h4>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.contacts}>
                <h4>{acf.conect_cont[0].title}</h4>
                <Link href={acf.conect_cont[0].link}>{acf.conect_cont[0].contact}</Link>
            </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
