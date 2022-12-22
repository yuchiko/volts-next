import React from "react";
import SocialItem from "./SocialItem";
import TelegramIcon from "images/icons/telegram.svg";

import {
  TELEGRAM_URL,
  FACEBOOK_URL,
  LINKEDIN_URL,
} from "constants/company-data";

const SocialsList = ({ asIcons = false, klass = '' }) => {
  let addKlass = asIcons ? 'icons-version' : '';

  return (
    <ul className={`socials ${addKlass} ${klass}`}>
      <SocialItem href={TELEGRAM_URL} text="Telegram" asIcon={asIcons} Icon={<TelegramIcon />}/>
      <SocialItem href={LINKEDIN_URL} text="Linkedin" asIcon={asIcons} Icon={<TelegramIcon />}/>
      <SocialItem href={FACEBOOK_URL} text="Facebook" asIcon={asIcons} Icon={<TelegramIcon />}/>
    </ul>
  );
};

export default SocialsList;
