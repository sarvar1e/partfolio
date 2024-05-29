import React from "react";

import { FooterComponent, SocialIconsF } from "./footerstyle";

const FooterMain = () => {
  return (
    <FooterComponent>
      <SocialIconsF>
        <div className="social">
          <box-icon name="linkedin" type="logo" color="#00ffee"></box-icon>
        </div>
        <div className="social">
          <box-icon name="instagram" type="logo" color="#00ffee"></box-icon>
        </div>
        <div className="social">
          <box-icon name="telegram" type="logo" color="#00ffee"></box-icon>
        </div>
        <div className="social">
          <box-icon name="github" type="logo" color="#00ffee"></box-icon>
        </div>
      </SocialIconsF>
      <ul className="list">
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
        <p>Contact</p>
        <p className="copyright">© Eshmirzaev Sarvar | All Rights Reserved</p>
      </ul>
    </FooterComponent>
  );
};

export default FooterMain;
