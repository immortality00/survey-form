import React from "react";
import { ReactComponent as Logo } from "../../assets/logo11.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionsLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      Follow and get in touch
      <OptionsLink href="https://www.instagram.com/the.3.eye">
        <FontAwesomeIcon icon={faInstagram} />
      </OptionsLink>
      <OptionsLink href="https://api.whatsapp.com/send?phone=97339604536">
        <FontAwesomeIcon icon={faWhatsapp} />
      </OptionsLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
