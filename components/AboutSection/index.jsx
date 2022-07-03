import React, { useState } from "react";
import ArrowRightIcon from "images/icons/arrow_right.svg";

const AboutSection = () => {
  return (
    <div className="sc about">
      <div className="grid-container">
        <div className="grid-x">
          <div className="large-8 cell large-offset-2">
            <p className="about__text ta-center">
              <strong>ТОВ «ВОЛЬТ ПОСТАЧ»</strong> — повноправний учасник
              енергетичної, газової та вугільної галузі.
              <strong>Компанія виступає надійним постачальником</strong>
              енергоресурсів «під ключ» на оптовому ринку.
              <b>Серед наших партнерів</b> —підприємства України, які будують
              бізнес у легкій та важкій промисловості, аграрному та харчовому
              секторі, а також міжнародні холдінги.
              <strong>Мы клієнтоорієнтована компанія</strong>, сфокусована на
              наданні якісних послуг за клієнтоорієнтованими цінами.
            </p>
            <div className="about__actions">
              {/* <!-- https://github.com/codrops/MagneticButtons/ --> */}
              {/* <!-- <button className="button button-magnetic-new">
            <span className="button__text">
              <span className="button__text-inner">Про нас</span>
            </span>
          </button> --> */}
              <button className="button-magnetic-icon" type="button">
                <div className="button__content">
                  <span className="button__text">Про нас</span>
                  <div className="button__icon">
                    <ArrowRightIcon />
                  </div>
                </div>
              </button>
              <button className="volt-button theme-2" type="button">
                Зв’язатися з нами
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
