import React, { useState } from "react";
import cx from "classnames";

import EnergyIcon from "images/icons/energy.svg";
import GasIcon from "images/icons/gas.svg";
import VoltsLogo from "images/icons/logo_shadow.svg";
import ElecticityForm from "./ElectricityForm";
import GasForm from "./GasForm";

const MainFormSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabClicked = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section className="sc main-form sc--invert sc-pt-0">
      <div className="grid-container">
        <div className="main-form__tabs">
          <div
            className={cx("main-form__tabs-item", {
              ["is-active"]: activeTab === 0,
            })}
            onClick={() => {tabClicked(0)}}
          >
            <EnergyIcon className="services-item__icon" />
            <span>Електроенергiя</span>
          </div>
          <div
            className={cx("main-form__tabs-item", {
              ["is-active"]: activeTab === 1,
            })}
            onClick={() => {tabClicked(1)}}
          >
            <GasIcon className="services-item__icon" />
            <span>Газ</span>
          </div>
        </div>
        <div className="main-form__box">
          <header className="main-form__header">
            <div className="d-flex flex-center">
              <h2 className="sc__heading main-form__heading">
                Підключитись до
              </h2>
              <VoltsLogo />
            </div>
            <p className="main-form__subheader">
              Якщо ваша компанія розглядає можливість отримувати постачання
              електроенергії, газу або вугілля, заповніть форму для розробки
              комерційної пропозіції
            </p>
          </header>
          <ElecticityForm isActive={activeTab === 0} />
          <GasForm isActive={activeTab === 1} />
        </div>
      </div>
    </section>
  );
};

export default MainFormSection;
