import React from 'react';
import { Logo } from '../Logo/Logo';
import css from './Footer.module.css';
// import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { LiaFacebook } from 'react-icons/lia';
import { AiFillInstagram } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';

export const Footer = () => {
  return (
    <footer>
      <div className={css.footer}>
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
            >
              {/* <svg className={css.icon} width="20" height="20">
                <use href="../Footer/icon/sprite.svg#icon-facebook"></use>
              </svg> */}
              <div className={css.iconThumb}>
                <div className={css.iconImg}>
                  <ImFacebook />
                </div>
              </div>
              {/* <FaFacebookF />
              <LiaFacebook /> */}
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/goitclub/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.networkLink}
            >
              <div className={css.iconThumb}>
                <div className={css.iconImg}>
                  <AiFillInstagram />
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
              rel="noopener noreferrer"
              className={css.networkLink}
            >
              <div className={css.iconThumb}>
                <div className={css.iconImg}>
                  <ImYoutube />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className={css.copyright}>
        <p>@2024, Foodies. All rights reserved</p>
      </div>
    </footer>
  );
};
