import React from 'react';
import * as footerStyles from './footer.module.scss';

function Footer() {
  return(
    <footer className={footerStyles.footer}>
      <p>© Inter-University Pokémon Society 2021. Designed by Matt Sykes.</p>
    </footer>
  );
}

export default Footer;