"use client";

import { FC, PropsWithChildren, useState } from "react";
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
import { usePathname } from "next/navigation";
import MenuBurger from "@/components/ui/menuBurger/MenuBurger";
import HeaderLogotype from "@/components/ui/headerLogotype/HeaderLogotype";

const Menu: FC<PropsWithChildren<any>> = ({ menu }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <div className={`${styles.mobileLogo} ${openMenu ? styles.activeLogo : ""}`}>
        <HeaderLogotype />
      </div>
      <nav className={styles.nav}>
        <ul className={`${styles.menu} ${openMenu ? styles.open : ""}`}>
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
                      <Link
                        className={
                          pathName === pathname ? styles.activeMenu : ""
                        }
                        onClick={() => setOpenMenu(false)}
                        href={pathName}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                }
              )
            : null}
        </ul>
        <div className={styles.burger}>
          <MenuBurger opens={openMenu} setOpen={setOpenMenu} />
        </div>
      </nav>
    </>
  );
};

export default Menu;
