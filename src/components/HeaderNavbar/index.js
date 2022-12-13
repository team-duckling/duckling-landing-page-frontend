import styles from "../../../styles/navbar.module.scss"; // importing the css file
import Link from "next/link";

export default function Navbar({ current }) {
  return (
    <div className={styles.navigationBar}>
      <h1 className={styles.brand}>Duckling</h1>

      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>{" "}
          {current === "home" ? (
            <span className={styles.current}>current page</span>
          ) : (
            ""
          )}{" "}
        </li>
        <li className={styles.menuItem}>
          <Link href="/members" className={styles.navLink}>
            Members
          </Link>{" "}
          {current === "members" ? (
            <span className={styles.current}>current page</span>
          ) : (
            ""
          )}{" "}
        </li>
        <li className={styles.menuItem}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>{" "}
          {current === "about" ? (
            <span className={styles.current}>current page</span>
          ) : (
            ""
          )}{" "}
        </li>
      </ul>
    </div>
  );
}
