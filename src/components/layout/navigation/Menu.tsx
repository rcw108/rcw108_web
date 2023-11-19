'use client'

import { FC, PropsWithChildren } from "react";
import {
    JSXElementConstructor,
    Key,
    PromiseLikeOfReactNode,
    ReactElement,
    ReactNode,
    ReactPortal,
  } from "react";
  
  import styles from "./navigation.module.scss";

  import Link from "next/link";
  import { usePathname } from 'next/navigation'

const Menu: FC<PropsWithChildren<any>> = ({menu}) => {

    const pathname = usePathname()

    

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {menu
          ? menu[0].fields.map(
              (
                item: {
                  url: string;
                  title:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => {
                let pathName = "";

                if (item.url.endsWith(".com/")) {
                  pathName = "/";
                } else if (item.url.includes(".com")) {
                  pathName = item.url.substr(item.url.indexOf(".com") + 4);
                  if (pathName.endsWith("/")) {
                    pathName = pathName.slice(0, -1);
                  }
                } else {
                  pathName = item.url;
                }


                return (
                  <li key={index} className={`${styles.menuItem}`}>
                    <Link className={pathName === pathname ? styles.activeMenu : "" } href={pathName}>{item.title}</Link>
                  </li>
                );
              }
            )
          : null}
      </ul>
    </nav>
  );
};

export default Menu;
