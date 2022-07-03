import React, { useState } from "react";
import Image from 'next/image';
import PartnerImage from 'images/content/partners-demo.jpg';

const PartnersSection = () => {
  return (
    <div className="partners">
      <div className="partners__image"></div>
      <Image
        src={PartnerImage}
        alt="parners image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default PartnersSection;
