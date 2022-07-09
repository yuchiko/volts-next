import React, { useState } from "react";

import ServiceItem from "./ServiceItem";

import EnergyIcon from "images/icons/energy.svg";
import GasIcon from "images/icons/gas.svg";

const ServicesSection = () => {
  return (
    <section className="services sc">
      <div className="grid-container">
        <div className="large-12 cell">
          <h2 className="sc__heading services__heading">Послуги</h2>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell large-6">
            <ServiceItem
              iconItem={<EnergyIcon className="services-item__icon" />}
              title="Електроенергія"
              shortText="Вам необхідно приєднати до електромереж новий будинок або нежитлове
              приміщення? Визначте тип приєднання та пройдіть необхідну процедуру."
            />
          </div>
          <div className="cell large-6">
            <ServiceItem
              iconItem={<GasIcon className="services-item__icon" />}
              title="Газ"
              shortText="Стандартне приєднання - приєднання до діючих газових мереж
              газорозподільного підприємства об’єктів газоспоживання
              потужністю до 16 куб.м/рік. Включно на відстань, що не перевищує
              25 м для сільської і 10 м для міської місцевості по прямій лінії
              від місця забезпечення потужності … до місця приєднання."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
