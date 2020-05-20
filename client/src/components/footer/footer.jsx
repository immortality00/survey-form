import React from "react";
import { FooterStyles, Copyrights } from "./footer.styles";

const Footer = () => (
  <FooterStyles>
    <Copyrights>
      &copy;
      <a href="https://www.hussain-marzooq.com">
        Hussain Marzooq {new Date().getFullYear()}
      </a>
    </Copyrights>
  </FooterStyles>
);

export default Footer;
