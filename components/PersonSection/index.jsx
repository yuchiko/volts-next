import React, { useState } from "react";
import PersonImage from "images/content/partner-image-me.png";
import Image from 'next/image';

const PersonSection = () => {
  return (
    <section className="sc person sc-pb-0">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="large-8 cell">
            <h2 className="sc__heading person__heading">
              Організаційні питання та документацію <span>беремо на себе!</span>
            </h2>
            <ul className="person__list">
              <li>
                <div>
                  <span>Консультації</span> з питань, пов’язаних зі зміною
                  постачальника електроенергії або природного газу.
                </div>
              </li>
              <li>
                <div>
                  <span>Допомога з документацією</span> — постійно відстежуємо
                  зміни в законодавстві та беремо на себе весь документообіг, що
                  дає змогу нашим партнерам працювати в межах чинного закону.
                </div>
              </li>
              <li>
                <div>
                  <span>Допомога з організаційними питаннями,</span> пов’язаними
                  з Держнаглядом і Національною комісією, яка здійснює державне
                  регулювання у галузі енергетики та комунальних послуг.
                </div>
              </li>
            </ul>
          </div>
          <div className="large-4">
            <Image src={PersonImage} alt="person" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonSection;
