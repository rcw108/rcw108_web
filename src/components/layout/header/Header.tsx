import { FC } from "react";

import styles from "./header.module.scss";
import Navigation from "../navigation/Navigation";
import HeaderLogotype from "@/components/ui/headerLogotype/HeaderLogotype";

interface IField {
  title: string;
  url: string;
}

interface IMenuState {
  id: number;
  name: string;
  fields: IField[];
}

const Header: FC =  ({}) => {

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.logotype}>
              <HeaderLogotype/>
            </div>
            <Navigation />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
