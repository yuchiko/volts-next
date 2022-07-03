import React, { useState } from "react";
import EnergyIcon from "images/icons/energy.svg";
import GasIcon from "images/icons/gas.svg";
import ArrowRightIcon from "images/icons/arrow_right.svg";

const ServicesSection = () => {
  return (
    <section className="services sc">
      <div className="grid-container">
        <div className="large-12 cell">
          <h2 className="sc__heading services__heading">Послуги</h2>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell large-6">
            <div className="services-item">
              <div className="in"></div>
              <div className="out"></div>
              {/* <!-- <div className="lightning"></div> --> */}
              <div className="services-item__header">
                <EnergyIcon className="services-item__icon" />
                <h3 className="services-item__heading">Електроенергія</h3>
              </div>
              <p className="services-item__text">
                Вам необхідно приєднати до електромереж новий будинок або
                нежитлове приміщення? Визначте тип приєднання та пройдіть
                необхідну процедуру.
              </p>
              <div className="services-item__footer">
                <button className="volt-button theme-2" type="button">
                  Підключитись
                </button>
                <button className="button-magnetic-icon" type="button">
                  <div className="button__content">
                    <span className="button__text">Онлайн консультація</span>
                    <div className="button__icon">
                      <ArrowRightIcon />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="cell large-6">
            <div className="services-item">
              <div className="in"></div>
              <div className="out"></div>
              {/* <!-- <div className="lightning"></div> --> */}
              <div className="services-item__header">
                <GasIcon className="services-item__icon" />
                <h3 className="services-item__heading">Газ</h3>
              </div>
              <p className="services-item__text">
                Стандартне приєднання - приєднання до діючих газових мереж
                газорозподільного підприємства об’єктів газоспоживання
                потужністю до 16 куб.м/рік. Включно на відстань, що не перевищує
                25 м для сільської і 10 м для міської місцевості по прямій лінії
                від місця забезпечення потужності … до місця приєднання.
              </p>
              <div className="services-item__footer">
                <button className="volt-button theme-2" type="button">
                  Підключитись
                </button>
                <button className="button-magnetic-icon" type="button">
                  <div className="button__content">
                    <span className="button__text">Онлайн консультація</span>
                    <div className="button__icon">
                      <ArrowRightIcon />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
