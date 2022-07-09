import React from "react";
import ArrowRightIcon from "images/icons/arrow_right.svg";
import LongArrow from "images/icons/long_arrow.svg";
import LongArrowDown from "images/icons/long_arrow_down.svg";

const ServiceItem = ({ iconItem, title, shortText }) => {
  return (
    <div className="services-item">
      <div className="in"></div>
      <div className="out"></div>
      {/* <!-- <div className="lightning"></div> --> */}
      <div className="services-item__expand button-circle">
        <div className="expanded-icon">
          <span>
            <LongArrow />
          </span>
          <span>
            <LongArrowDown />
          </span>
        </div>
      </div>
      <div className="services-item__header">
        {iconItem}
        <h3 className="services-item__heading">{title}</h3>
      </div>
      <p className="services-item__text">{shortText}</p>
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
  );
};

export default ServiceItem;
