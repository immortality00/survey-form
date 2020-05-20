import styled from "styled-components";

export const FooterStyles = styled.footer`
  -moz-transition: opacity 0.5s ease;
  -webkit-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  margin: 3em 0 0 0;
  opacity: 1;
  text-align: center;

  @media screen and (max-width: 1680px) {
    margin: 2em 0 0 0;
  }
  @media screen and (max-width: 1280px) {
    margin: 1.5em 0 0 0;
  }
`;
export const Copyrights = styled.p`
  color: #bbb;
  font-size: 0.8em;
  letter-spacing: 0.25em;
  margin-bottom: 0;
  text-transform: uppercase;
`;
