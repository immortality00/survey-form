import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    height: 60px;
    width: 200%;
    margin-bottom: 5rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 150px;

  @media screen and (max-width: 800px) {
    width: 80px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 150%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
    padding-top: 3rem;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionsLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
`;
