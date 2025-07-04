import styled from "styled-components";

export const RegisterBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgb(244, 245, 246);
`;

export const RegisterHeader = styled.div`
  width: 100vw;
  height: 64px;
  position: absolute;
  top: 0;
  display: flex;
  background: white;
  align-items: center;
`;

export const Logo = styled.div`
  width: 143.68px;
  height: 19px;
  padding-left: 120px;
`;

export const RegisterBlock = styled.div`
  width: 379px;
  min-height: 385px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: white;
`;

export const RegisterHead = styled.div`
  width: 313px;
  height: 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  h1 {
    color: black;
    font-family: "Montserrat";
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
`;

export const RegisterForm = styled.form`
  width: 313px;
  min-height: 321px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RegisterInputBlock = styled.div`
  width: 313px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`;

export const RegisterInput = styled.input`
  width: 313px;
  height: 39px;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  outline: none;

  border: 0.5px solid rgb(153, 153, 153);
  background: white;
  color: rgb(0, 0, 0);

  ${(props) =>
    props.$hasError &&
    `
    border: 0.5px solid rgb(242, 80, 80);
    background: rgb(255, 235, 235);
  `}

  ${(props) =>
    props.$isValid &&
    !props.$hasError &&
    `
    border: 0.5px solid rgb(115, 52, 234);
    background: rgb(241, 235, 253);
  `}

  &::placeholder {
    color: rgb(153, 153, 153);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const RegisterButton = styled.button`
  width: 313px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  background: rgb(115, 52, 234);
  border: none;
  color: white;
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 600;
`;

export const RegisterError = styled.p`
  color: rgb(248, 77, 77);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  margin: 0;
`;

export const RegisterLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    margin: 0;
    color: rgb(153, 153, 153);
    font-family: Montserrat;
    font-size: 12px;
    text-align: center;
  }

  a {
    color: rgb(153, 153, 153);
    font-family: Montserrat;
    font-size: 12px;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
  }
`;
