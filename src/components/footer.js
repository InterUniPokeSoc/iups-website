import React from 'react';
import * as footerStyles from './footer.module.scss';

function Footer() {
  let year = new Date().getFullYear()

  return(
    <footer className={footerStyles.footer}>
      <p className={footerStyles.paragraph}>© Inter-University Pokémon Society {year}</p>
      <p className={footerStyles.paragraph}>Pokémon and All Respective Names are Trademark & © of Nintendo 1996-{year}</p>
    </footer>
  );
}

export default Footer;