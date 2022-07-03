import React, { useState } from "react";
import PaperPlaneIcon from "images/icons/paper-plane.svg";
import EnergyIcon from "images/icons/energy.svg";
import GasIcon from "images/icons/gas.svg";
import {
  COMPANY_PHONE_NUMBER,
  COMPANY_EMAIL,
  TELEGRAM_URL,
  FACEBOOK_URL,
  LINKEDIN_URL,
} from "constants/company-data";

const WelcomeSection = () => {
  return (
    <div className="welcome grid-100">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="welcome__wrapper">
            <div className="welcome__empty" />
            <div className="welcome__center">
              <p className="welcome__lead">
                Вигідна ціна за <span>газ</span> в будь-яку точку Центральної
                Європи
              </p>
              <p className="welcome__text">
                Підключимо до діючих газових мереж газорозподільного
                підприємства об’єктів газоспоживання потужністю до 16 куб.м/рік.
              </p>
              <div className="welcome__buttons">
                <button
                  className="welcome__btn button-animation-fill is-active"
                  type="button"
                >
                  <div className="button__bg"></div>
                  <div className="button__content">
                    <EnergyIcon className="button__icon" />
                    <span>Електроенергія</span>
                  </div>
                </button>
                <button
                  className="welcome__btn button-animation-fill"
                  type="button"
                >
                  <div className="button__bg"></div>
                  <div className="button__content">
                    <GasIcon className="button__icon" />
                    <span>Газ</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="welcome__footer">
              <ul className="socials welcome__socials">
                <li className="socials__item">
                  <a href={TELEGRAM_URL} className="socials__link">
                    Telegram
                  </a>
                </li>
                <li className="socials__item">
                  <a href={LINKEDIN_URL} className="socials__link">
                    Linkedin
                  </a>
                </li>
                <li className="socials__item">
                  <a href={FACEBOOK_URL} className="socials__link">
                    Facebook
                  </a>
                </li>
              </ul>
              <div className="welcome__down-link">
                <a href="#below" className="down-arrow"></a>
              </div>
              <div className="welcome__contacts">
                <a href={`tel:${COMPANY_PHONE_NUMBER.replace(/[- )(]/g, "")}`}>
                  {COMPANY_PHONE_NUMBER}
                </a>
                <a href={TELEGRAM_URL} className="circle-link">
                  <PaperPlaneIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
