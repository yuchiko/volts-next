import React, { useState } from "react";

const FooterItem = ({ href, text }) => {
  return (
    <li className="menu__item">
      {(href && (
        <a href="#" className="menu__link">
          {text}
        </a>
      )) || <span className="menu__text">{text}</span>}
    </li>
  );
};

export default FooterItem;
