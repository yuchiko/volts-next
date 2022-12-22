import React, { useState } from "react";
import FooterItem from "./FooterItem";
import VoltsLogo from "images/icons/logo_shadow.svg";
import SocialsList from "components/SocialsList";

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
              <FooterItem href="#" text="Головна сторінка" />
              <FooterItem href="#" text="Послуги" />
              <FooterItem href="#" text="Інфо-центр" />
              <FooterItem href="#" text="Контакти" />
            </ul>
            <ul className="menu">
              <FooterItem text="Послуги" />
              <FooterItem href="#" text="Газ" />
              <FooterItem href="#" text="Електроенергія" />
            </ul>
            <ul className="menu">
              <FooterItem text="Важливо" />
              <FooterItem href="#" text="FAQs" />
              <FooterItem href="#" text="Документація" />
              <FooterItem href="#" text="Сертифікати" />
            </ul>
          </div>
          <div className="footer__row cell small-12">
            <div className="d-flex flex-ai-center">
              <span className="m-r-3">Соціальні мережі</span>
              <SocialsList asIcons />
            </div>
          </div>
          <div className="footer__row footer__copyright copyright cell small-12">
            <div className="copyright__contacts">
              <a href="#">Політика конфіденційності</a>
              <a href="mailto:office@volts.energy">office@volts.energy</a>
              <a href="tel:+380444904558">+38(044) 490 45 58</a>
            </div>
            <span>© 2019-{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
