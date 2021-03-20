import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginMenu.module.css";

export default function LoginMenu() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link className={styles.link} to="/login">
          Login
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.link} to="/register">
          Register
        </Link>
      </li>
    </ul>
  );
}
