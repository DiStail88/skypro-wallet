import styled from "styled-components";

export const AddForm = styled.form`
  width: 313px;
  height: 554px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  padding: 32px;
`;

export const AddFormBlock = styled.div`
  width: 379px;
  height: 618px;
  border-radius: 30px;

  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  /* Skyeng b2b / White */
  background: rgb(255, 255, 255);
`;

export const AddHeading = styled.h2`
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0px;
`;

export const CategoryButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  width: 277px;
  height: 105px;
`;

export const CategoryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 20px;
  border: none;
  border-radius: 30px;
  background: ${({ active }) =>
    active ? "rgb(241, 235, 253)" : "rgb(244, 245, 246)"};
  color: ${({ active }) => (active ? "rgb(115, 52, 234)" : "rgb(0, 0, 0)")};

  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0%;
  text-align: center;

  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    fill: currentColor;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }

  &:hover,
  &:focus {
    background: rgb(241, 235, 253);
    color: rgb(115, 52, 234);
    outline: none;
  }
`;

export const AddFormLabel = styled.label`
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`;

export const AddFormInput = styled.input`
  width: 313px;
  height: 39px;
  padding: 12px;
  box-sizing: border-box;
  border: ${({ hasValue }) =>
    hasValue
      ? "0.5px solid rgb(115, 52, 234)"
      : "0.5px solid rgb(153, 153, 153)"};
  border-radius: 6px;
  outline: none;
  background: ${({ hasValue }) => (hasValue ? "rgb(241, 235, 253)" : "white")};
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  transition: background 0.2s, border 0.2s;
`;

export const AddFormBlockInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

export const AddFormButton = styled.button`
  width: 313px;
  height: 39px;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: center;
  border-radius: 6px;
  padding: 12px;
  background: rgb(115, 52, 234);
  border: none;
`;
