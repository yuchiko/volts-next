import React, { useState } from "react";
import EnergyIcon from "images/icons/energy.svg";
import GasIcon from "images/icons/gas.svg";
import VoltsLogo from "images/icons/logo_shadow.svg";

const MainFormSection = () => {
  return (
    <section className="sc main-form sc--invert sc-pt-0">
      <div className="grid-container">
        <div className="main-form__tabs">
          <div
            className="main-form__tabs-item is-active js-form-tab-item"
            data-main-form="electricity-form"
          >
            <EnergyIcon className="services-item__icon" />
            <span>Електроенергiя</span>
          </div>
          <div
            className="main-form__tabs-item js-form-tab-item"
            data-main-form="gas-form"
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
          <form id="electricity-form" className="js-main-form-variant">
            <table className="main-form__table">
              <tr>
                <td>
                  <label className="volt-form-label" htmlFor="ff_company_name">
                    1. Назва юридичної особи / код €ДРПОУ
                  </label>
                </td>
                <td>
                  <input
                    id="ff_company_name"
                    name="company_name"
                    className="volt-input"
                    type="text"
                    placeholder="Ваша назва"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="volt-form-label"
                    htmlFor="ff_consumption_class"
                  >
                    2. Клас Споживання
                  </label>
                </td>
                <td>
                  <input
                    id="ff_consumption_class"
                    name="consumption_class"
                    className="volt-input"
                    type="text"
                    placeholder="1 клас / 11 клас"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    className="volt-form-label"
                    htmlFor="ff_consumption_class"
                  >
                    3. Група Споживання:
                  </span>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="volt-form-radio">
                      <input
                        type="radio"
                        id="consumption_group_a"
                        name="radio-group"
                      />
                      <label htmlFor="consumption_group_a">Група А</label>
                    </div>
                    <div className="volt-form-radio">
                      <input
                        type="radio"
                        id="consumption_group_b"
                        name="radio-group"
                      />
                      <label htmlFor="consumption_group_b">Група Б</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="volt-form-label" htmlFor="ff_address">
                    4. Мiсце пiдключення
                  </label>
                </td>
                <td>
                  <input
                    id="ff_address"
                    name="connection_address"
                    className="volt-input"
                    type="text"
                    placeholder="Область, регiон, населений пункт, адреса"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="volt-form-label" htmlFor="who_is_provider">
                    5. Хто є Постачальником електроенергiї
                  </label>
                </td>
                <td>
                  <input
                    id="who_is_provider"
                    name="who_is_provider"
                    className="volt-input"
                    type="text"
                    placeholder="Назва постачальника"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="volt-form-label"
                    htmlFor="who_is_distributor"
                  >
                    6. Хто е Розподiльником електроенергії
                  </label>
                </td>
                <td>
                  <input
                    id="who_is_distributor"
                    name="who_is_distributor"
                    className="volt-input"
                    type="text"
                    placeholder="Назва розподiльника"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="volt-form-label"
                    htmlFor="price_for_3_month"
                  >
                    7. Вартiсть 1 кВт/год за останнi 3 (три) мiсяцi, на момент
                    подання iнформації
                  </label>
                </td>
                <td>
                  <input
                    id="price_for_3_month"
                    name="price_for_3_month"
                    className="volt-input"
                    type="text"
                    placeholder="Вартість в гривні"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="volt-form-label"
                    htmlFor="schedulle_payment"
                  >
                    8. Графiк оплати за використану е/е:
                  </label>
                </td>
                <td>
                  <div className="grid-x grid-margin-x">
                    <div className="cell medium-6">
                      <input
                        id="schedulle_payment"
                        name="schedulle_payment"
                        className="volt-input"
                        type="text"
                        placeholder="Дiючий графiк"
                      />
                    </div>
                    <div className="cell medium-6">
                      <input
                        id="schedulle_payment_new"
                        name="schedulle_payment_new"
                        className="volt-input"
                        type="text"
                        placeholder="Бажаний графiк"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <div className="main-form__footer">
              <div className="d-flex flex-center">
                <div className="volt-form-checkbox">
                  <input type="checkbox" id="check_personal_data" />
                  <label htmlFor="check_personal_data">
                    <div className="tick"></div>
                  </label>
                </div>
                <label
                  htmlFor="check_personal_data"
                  className="volt-form-label c-pointer"
                >
                  Погоджуюсь на обробку персональних даних
                </label>
              </div>
              <button
                className="main-form__submit volt-button volt-button--large"
                type="submit"
              >
                Розрахувати комерційну пропозицію
              </button>
              <p className="main-form__small-text">
                За додатковою інформацією звертайтесь до
                <a href="#">відділу продажів</a> або в <a href="#">FAQ</a>
              </p>
            </div>
          </form>
          <form id="gas-form" className="hide js-main-form-variant">
            <table className="main-form__table">
              <tr>
                <td>
                  <label className="volt-form-label" htmlFor="ff_company_name">
                    {" "}
                    ГАЗ ГАЗ ГАЗ 1. Назва юридичної особи / код €ДРПОУ
                  </label>
                </td>
                <td>
                  <input
                    id="ff_company_name"
                    name="company_name"
                    className="volt-input"
                    type="text"
                    placeholder="Ваша назва"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="volt-form-label"
                    htmlFor="ff_consumption_class"
                  >
                    2. Клас Споживання
                  </label>
                </td>
                <td>
                  <input
                    id="ff_consumption_class"
                    name="consumption_class"
                    className="volt-input"
                    type="text"
                    placeholder="1 клас / 11 клас"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    className="volt-form-label"
                    htmlFor="ff_consumption_class"
                  >
                    3. Група Споживання:
                  </span>
                </td>
                <td>
                  <div className="d-flex">
                    <div className="volt-form-radio">
                      <input
                        type="radio"
                        id="consumption_group_a"
                        name="radio-group"
                      />
                      <label htmlFor="consumption_group_a">Група А</label>
                    </div>
                    <div className="volt-form-radio">
                      <input
                        type="radio"
                        id="consumption_group_b"
                        name="radio-group"
                      />
                      <label htmlFor="consumption_group_b">Група Б</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="volt-form-label" htmlFor="ff_address">
                    4. Мiсце пiдключення
                  </label>
                </td>
                <td>
                  <input
                    id="ff_address"
                    name="connection_address"
                    className="volt-input"
                    type="text"
                    placeholder="Область, регiон, населений пункт, адреса"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="volt-form-label" htmlFor="who_is_provider">
                    5. Хто є Постачальником електроенергiї
                  </label>
                </td>
                <td>
                  <input
                    id="who_is_provider"
                    name="who_is_provider"
                    className="volt-input"
                    type="text"
                    placeholder="Назва постачальника"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="volt-form-label"
                    htmlFor="who_is_distributor"
                  >
                    6. Хто е Розподiльником електроенергії
                  </label>
                </td>
                <td>
                  <input
                    id="who_is_distributor"
                    name="who_is_distributor"
                    className="volt-input"
                    type="text"
                    placeholder="Назва розподiльника"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="volt-form-label"
                    htmlFor="price_for_3_month"
                  >
                    7. Вартiсть 1 кВт/год за останнi 3 (три) мiсяцi, на момент
                    подання iнформації
                  </label>
                </td>
                <td>
                  <input
                    id="price_for_3_month"
                    name="price_for_3_month"
                    className="volt-input"
                    type="text"
                    placeholder="Вартість в гривні"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label
                    className="volt-form-label"
                    htmlFor="schedulle_payment"
                  >
                    8. Графiк оплати за використану е/е:
                  </label>
                </td>
                <td>
                  <div className="grid-x grid-margin-x">
                    <div className="cell medium-6">
                      <input
                        id="schedulle_payment"
                        name="schedulle_payment"
                        className="volt-input"
                        type="text"
                        placeholder="Дiючий графiк"
                      />
                    </div>
                    <div className="cell medium-6">
                      <input
                        id="schedulle_payment_new"
                        name="schedulle_payment_new"
                        className="volt-input"
                        type="text"
                        placeholder="Бажаний графiк"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <div className="main-form__footer">
              <div className="d-flex flex-center">
                <div className="volt-form-checkbox">
                  <input type="checkbox" id="check_personal_data" />
                  <label htmlFor="check_personal_data">
                    <div className="tick"></div>
                  </label>
                </div>
                <label
                  htmlFor="check_personal_data"
                  className="volt-form-label c-pointer"
                >
                  Погоджуюсь на обробку персональних даних
                </label>
              </div>
              <button
                className="main-form__submit volt-button volt-button--large"
                type="submit"
              >
                Розрахувати комерційну пропозицію
              </button>
              <p className="main-form__small-text">
                За додатковою інформацією звертайтесь до
                <a href="#">відділу продажів</a> або в <a href="#">FAQ</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainFormSection;
