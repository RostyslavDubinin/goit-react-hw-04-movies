import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <header>
    <nav className={styles.nav}>
      <NavLink
        to="/"
        exact
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Movies
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
