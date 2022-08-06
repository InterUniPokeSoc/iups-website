import React, {useState} from 'react';
import {Link} from 'gatsby';
import * as headerStyles from './header.module.scss';

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
    <header className={navVisible ? headerStyles.openHeader : headerStyles.header}>
      <div className={headerStyles.mainLogoWrapper}>
      <Link to="/">
        <img id={navVisible ? headerStyles.mainLogoOpenNav : headerStyles.mainLogo} src={ MainLogo }/>
      </Link>
      </div>

      <nav className={navVisible ? headerStyles.openNav : headerStyles.closedNav}>
        <ul className={headerStyles.navList}>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/events">Events</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/oursocieties">Our Societies</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/howtojoin">How to Join</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <img className={navVisible ? headerStyles.closeIcon : headerStyles.navIcon} onClick={() => switchNav()} src={navVisible ? CloseIcon : HamburgerIcon } />
    </header>
  );
}

export default Header;