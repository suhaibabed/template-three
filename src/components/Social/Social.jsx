import React from "react";
import "./Social.css";

import { TiSocialFacebookCircular, TiSocialTwitter } from 'react-icons/ti'
import { AiFillInstagram } from 'react-icons/ai'

const Social = () => {
  return (
    <ul className="social-list">
      <li className="list-item">
        <AiFillInstagram />
      </li>
      <li className="list-item">
        <TiSocialFacebookCircular />
      </li>
      <li className="list-item">
        <TiSocialTwitter />
      </li>
    </ul>
  );
};

export default Social;
