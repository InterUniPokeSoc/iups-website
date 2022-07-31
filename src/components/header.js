import React, {useState} from 'react';
import {Link} from 'gatsby';
import * as headerStyles from './header.module.scss';

function Header() {
  const [navVisible, setNavVisible] = useState(false);

  function switchNav() {
    setNavVisible(!navVisible);
  }

  return (
    <header className={navVisible ? headerStyles.openHeader : headerStyles.header}>
      <div className={headerStyles.mainLogoWrapper}>
      <Link to="/">
        <img id={navVisible ? headerStyles.mainLogoOpenNav : headerStyles.mainLogo} src={'./images/iups-logo-full.svg'} alt="Main Website Logo"/>
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

      <img className={navVisible ? headerStyles.closeIcon : headerStyles.navIcon} onClick={() => switchNav()} src={navVisible ? "/images/times-solid.svg" : "/images/bars-solid.svg"}/>
    </header>
  );
}

export default Header;