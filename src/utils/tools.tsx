import React from 'react';
import { Link } from 'react-router-dom';

import mcityLogo from 'assets/images/logos/manchester_city_logo.png';

interface IProps {
  link: boolean;
  linkTo: string;
  width: string;
  height: string;
}

export const CityLogo = ({ link, linkTo, width, height }: IProps) => {
  const template = (
    <img
      className='img_cover'
      src={`${mcityLogo}`}
      style={{
        width: width,
        height: height,
      }}
    />
  );

  if (link) {
    return (
      <Link className='link_logo' to={linkTo}>
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
