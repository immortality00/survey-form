import styled from "styled-components";

export const AddItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 7%;

  @media screen and (max-width: 800px) {
    width: 200%;
    display: block;
    margin: 7rem 3rem;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
export const SectionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    display: grid;
    width: auto;
  }
`;
export const LeftSection = styled.div`
  float: left;
  width: 30%;
  @media screen and (max-width: 800px) {
    width: 80%;
    margin: 0 13rem 0 auto;
  }
`;
export const RightSection = styled.div`
  float: right;
  width: 30%;
  & .upload {
    display: none;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
    margin: 0 13rem 0 auto;
  }
`;

export const AddItemsTitle = styled.h2`
  margin: 5px auto;
  @media screen and (max-width: 800px) {
    padding: 0 1rem;
    align-items: center;
  }
`;
export const AddItemsText = styled.p`
  margin: 10px auto;
  @media screen and (max-width: 800px) {
    padding: 0 3rem;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  margin: 10px 34rem;

  @media screen and (max-width: 800px) {
    margin: 0 14rem;
  }
`;
