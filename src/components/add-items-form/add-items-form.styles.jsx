import styled from "styled-components";

export const AddItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 7%;

  @media screen and (max-width: 800px) {
    width: 25%;
  }
`;
export const SectionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
`;
export const LeftSection = styled.div`
  float: left;
  width: 30%;
`;
export const RightSection = styled.div`
  float: right;
  width: 30%;
  & .upload {
    display: none;
  }
`;

export const AddItemsTitle = styled.h2`
  margin: 5px auto;
`;
export const AddItemsText = styled.p`
  margin: 10px auto;
`;

export const ButtonContainer = styled.div`
  margin: 10px 34rem;
`;
