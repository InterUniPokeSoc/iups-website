import React from 'react';
import * as footerStyles from './footer.module.scss';

function Footer() {
  let year = new Date().getFullYear()

  return(
    <footer className={footerStyles.footer}>
      <p>© Inter-University Pokémon Society {year}.</p>
    </footer>
  );
}

export default Footer;