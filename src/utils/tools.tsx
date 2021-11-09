import React from 'react';
import { signOut } from '@firebase/auth';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import mcityLogo from 'assets/images/logos/manchester_city_logo.png';
import { auth } from 'config/firebase';

interface IProps {
  link: boolean;
  linkTo: string;
  width: string;
  height: string;
}

interface ITag {
  children?: React.ReactNode;
  background?: string;
  color?: string;
  link?: boolean;
  linkTo: string;
  size?: string;
  add?: {};
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

export const Tag = ({
  children,
  link,
  linkTo,
  background,
  size,
  color,
  add,
}: ITag) => {
  const template = (
    <div
      style={{
        backgroundColor: background ? background : '#ffffff',
        fontSize: size ? size : '15px',
        color: color ? color : '#000000',
        padding: '5px 10px',
        display: 'inline-block',
        fontFamily: 'Righteous',
        ...add,
      }}
    >
      {children}
    </div>
  );

  if (link) {
    return <Link to={linkTo}>{template}</Link>;
  } else {
    return template;
  }
};

export const showErrorToast = (msg: string) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_LEFT,
  });
};

export const showSuccessToast = (msg: string) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_LEFT,
  });
};

export const logoutHandler = async () => {
  await signOut(auth).then(() => showSuccessToast('Good bye!'));
};
