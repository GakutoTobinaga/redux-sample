"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

import styles from "../styles/layout.module.css";
import { selectCount, selectTobinaga } from "@/lib/features/counter/counterSlice";

export const Nav = () => {
  const count = useAppSelector(selectCount)
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div>nowCount: {count}</div>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : ""
        }`}
        href="/quotes"
      >
        Quotes
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/test" ? styles.active : ""
        }`}
        href="/test"
      >
        Test
      </Link>
    </nav>
  );
};
