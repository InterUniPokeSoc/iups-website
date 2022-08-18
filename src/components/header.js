import React, {useState} from 'react';
import {Link} from 'gatsby';
import * as styles from './header.module.scss';

// Image Imports
import MainLogo from '../images/branding/iups-logo-full.svg'
import HamburgerIcon from '../images/icons/bars-solid.svg'
import CloseIcon from '../images/icons/times-solid.svg'

function Header() {
  const [navVisible, setNavVisible] = useState(false);

  function switchNav() {
    setNavVisible(!navVisible);
  }

  return (
    <header className={navVisible ? styles.openHeader : styles.header}>
      <div className={styles.mainLogoWrapper}>
      <Link to="/">
        <img id={ styles.mainLogo } src={ MainLogo }/>
      </Link>
      </div>

      <nav className={navVisible ? styles.openNav : styles.closedNav}>
        <ul className={styles.navList}>
            <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">Home</Link></li>
            <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/about">About</Link></li>
            <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/events">Events</Link></li>
            <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/oursocieties">Our Societies</Link></li>
            <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/howtojoin">How to Join</Link></li>
            <li><Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <a className={ styles.compactNavMenuButton } onClick={() => switchNav()}>
        <a>{navVisible ? "Close" : "Menu"}</a>
        <img className={navVisible ? styles.closeIcon : styles.navIcon} src={navVisible ? CloseIcon : HamburgerIcon } />
      </a>
    </header>
  );
}

export default Header;