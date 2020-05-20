import styled from "styled-components";

export const AddItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 7%;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: block;
    margin: 7rem 0rem;
    align-items: center;
  }
`;
export const SectionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    display: grid;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    display: flex;
  }
`;
export const LeftSection = styled.div`
  float: left;
  width: 30%;
  @media screen and (max-width: 800px) {
    float: none;
    width: auto;
    margin-bottom: -52px;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    margin-bottom: 0;
  }
`;
export const RightSection = styled.div`
  float: right;
  width: 30%;
  & .upload {
    display: none;
  }
  @media screen and (max-width: 800px) {
    float: none;
    width: auto;
  }
`;

export const AddItemsTitle = styled.h2`
  margin: 5px auto;
  @media screen and (max-width: 800px) {
    padding: 0 4rem;
    text-align: center;
    font-size: small;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    font-size: x-large;
  }
`;
export const AddItemsText = styled.p`
  margin: 10px auto;
  @media screen and (max-width: 800px) {
    padding: 0 4rem;
    text-align: center;
    font-size: small;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    font-size: larger;
  }
`;

export const ButtonContainer = styled.div`
  margin: 10px 34rem;

  @media screen and (max-width: 800px) {
    margin: 0 5rem;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    margin: 0 18rem;
  }
`;
