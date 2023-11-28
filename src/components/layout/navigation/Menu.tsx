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
      <div
        className={`${styles.mobileLogo} ${openMenu ? styles.activeLogo : ""}`}
      >
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
                  const pathName = item.url.startsWith("/")
                    ? item.url
                    : `/${item.url.replace("http://", "")}`;
                  console.log(`${pathname}`);

                  return (
                    <li key={index} className={`${styles.menuItem}`}>
                      <Link
                        className={
                          pathName === pathname || pathname === `${pathName}/70` || pathname === `${pathName}/76` || pathname === `${pathName}/283` || pathname === `${pathName}/338` ? styles.activeMenu : ""
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
