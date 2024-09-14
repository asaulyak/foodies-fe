import React from 'react';
import { Logo } from '../Logo/Logo';
import css from './Footer.module.css';
import { ImFacebook } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={css.footer}>
      <div className={css.footerTop}>
        <div>
          <Logo />
        </div>

        <ul className={css.networkLinks}>
          <li>
            <a
              href="https://www.facebook.com/goITclub/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.networkLink}
              aria-label="Visit our Facebook page"
            >
              <ImFacebook className={css.iconImg} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/goitclub/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.networkLink}
              aria-label="Visit our instagram page"
            >
              <AiFillInstagram className={css.iconImg} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
              rel="noopener noreferrer"
              className={css.networkLink}
              aria-label="Visit our youtube page"
            >
              <ImYoutube className={css.iconImg} />
            </a>
          </li>
        </ul>
      </div>
      <hr className={css.horizontal_line} />
      <div className={css.copyright}>
        <p>@{currentYear}, Foodies. All rights reserved</p>
      </div>
    </footer>
  );
};
