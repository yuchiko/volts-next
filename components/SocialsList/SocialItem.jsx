import React from "react";

const SocialItem = ({ href, text, Icon = <></>, asIcon }) => {
  let klass = "";
  if (asIcon) {
    klass += "as-icon";
  }

  return (
    <li className="socials__item" data-for={"mytip"}>
      <a href={href} className={`socials__link ${klass}`}>
        {asIcon && (
          <>
            <span className="socials__tip">{text}</span>
            <span className="backbg" />
          </>
        )}
        {asIcon ? Icon : text}
      </a>
    </li>
  );
};

export default SocialItem;
