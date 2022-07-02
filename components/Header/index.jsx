import React, { useState } from "react";
import cx from "classnames";

import UkrainianFlag from "images/icons/ukraine-flag.svg";
import VoltsLogo from "images/icons/logo_shadow.svg";
import Hamburger from "images/icons/hamburger.svg";

import styles from "./styles.module.scss";

const Header = ({}) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const hamburgerMenuClicked = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div
          className={cx("burger-m header__burger-m js-burger-menu", {
            ["is-active"]: isMobileMenuOpened,
          })}
          onClick={hamburgerMenuClicked}
        >
          <Hamburger className="ham hamRotate ham4" />
        </div>
        <div className="header__menu menu">
          <div className="header__menu-list">
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="#">
                  <span className="menu__link-text">Про компанію</span>
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  <span className="menu__link-text">Підключення</span>
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  <span className="menu__link-text">Інфо-центр</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="header__logo">
            <a className="menu__link" href="#">
              <VoltsLogo />
            </a>
          </div>
          <div className="header__menu-list">
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="#">
                  <span className="menu__link-text">Контакти</span>
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  <span className="menu__link-text">Підключитись</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lang-dropdown header__lang-dropdown">
          <div className="lang-dropdown__current lang-dropdown__ua">
            <span className="lang-dropdown__short">укр</span>
            <UkrainianFlag className="lang-dropdown__flag" alt="ua flag" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
