import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeBackground = styled.div`
  width: 100vw;
  height: 870px;

  position: relative;
  background: rgb(244, 245, 246);
`;

export const HomeHeader = styled.div`
  width: 100vw;
  height: 64px;
  position: absolute;
  top: 0px;
  display: flex;
  background: rgb(255, 255, 255);
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`;

export const HomeLogo = styled.div`
  width: 143.68px;
  height: 19px;
`;

export const HomePopExit = styled.a`
  width: 49px;
  height: 24px;
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 170%;
  letter-spacing: 0px;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: rgb(115, 52, 234);
    cursor: pointer;
  }
`;

export const HomeLinkBlock = styled.div`
  min-width: 300px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
  padding: 0px;
`;

export const HomeLink = styled(NavLink)`
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: 0px;
  text-align: center;
  text-decoration: none;

  &.active {
    color: rgb(115, 52, 234);
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const HomeHead = styled.h1`
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0px;
  text-align: left;
  padding-top: 100px;
  padding-left: 120px;
  position: relative;
`;

export const HomeBlock = styled.div`
  padding-top: 32px;
  display: flex;
  gap: 34px;
`;

// export const HomeBlock = styled.div`

// `;

// export const HomeBlock = styled.div`

// `;

// export const HomeBlock = styled.div`

// `;
