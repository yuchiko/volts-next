import React, { useState } from "react";
import VoltsLogo from "images/icons/logo_shadow.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="footer__logo cell large-3">
            <VoltsLogo />
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell large-3">
            <span className="logo-subline">
              учасник енергетичної, газової та вугільної галузі.
            </span>
          </div>
          <div className="cell large-offset-1 large-8 footer__menus">
            <ul className="menu">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Головна сторінка
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Послуги
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  FAQ
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Контакти
                </a>
              </li>
            </ul>
            <ul className="menu">
              <li className="menu__item">
                <span className="menu__text">Важливо</span>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  FAQs
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Документація
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Документація
                </a>
              </li>
            </ul>
            <ul className="menu">
              <li className="menu__item">
                <span className="menu__text">Соцільні мержі</span>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Telegram
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Linkedin
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__copyright copyright cell small-12">
            <div className="copyright__contacts">
              <a href="#">Політика конфіденційності</a>
              <a href="mailto:office@volts.energy">office@volts.energy</a>
              <a href="tel:+380444904558">+38(044) 490 45 58</a>
            </div>
            <span>© 2003-2022</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
