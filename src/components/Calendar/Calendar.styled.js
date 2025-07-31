import styled, { css } from "styled-components";

export const CalendarWrapper = styled.div`
  width: 379px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px;

  flex: none;
  order: 1;
  flex-grow: 0;

  border-radius: 30px;

  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgb(255, 255, 255);
`;

export const CalendarTitle = styled.h3`
  width: 101px;
  height: 29px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
  padding: 0;

  flex: none;
  order: 0;
  flex-grow: 0;

  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: center;

  margin-left: 6px;
`;

export const CalendarHeader = styled.div`
  height: 16px;
  width: 167px;
  padding-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  justify-content: space-between;

  flex: none;
  order: 0;
  flex-grow: 0;

  color: rgb(148, 166, 190);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
  margin-left: 6px;
`;

export const CalendarMonthYear = styled.div`
  width: 313px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: rgb(0, 0, 0);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding-top: 25px;
  padding-bottom: 12px;
`;

export const CalendarDaysOfWeek = styled.div`
  display: flex;
  font-weight: 500;
  justify-content: space-around;
  padding-top: 30px;
  padding-bottom: 7px;
`;

export const CalendarCellWeekday = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: rgb(153, 153, 153);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
`;

export const CalendarCells = styled.div`
  width: 316px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const CalendarTop = styled.div`
  width: 100%;
  height: 81px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -32px;
    width: calc(100% + 64px); /* компенсируем padding */
    height: 0.5px;
    background-color: rgb(153, 153, 153);
  }
`;

export const CalendarEmptyCell = styled.div`
  width: 40px;
  height: 40px;
`;

export const CalendarDay = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 60px;

  background: rgb(244, 245, 246);
  color: rgb(0, 0, 0);

  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  text-align: center;

  transition: all 0.2s ease;

  ${(props) =>
    props.$isSelected &&
    css`
      background: rgb(241, 235, 253);
      color: rgb(115, 52, 234);
    `}

  &:hover {
    background: rgb(241, 235, 253);
    color: rgb(115, 52, 234);
    cursor: pointer;
  }
`;

export const ScrollableCalendarCells = styled.div`
  margin-top: 15px;
  overflow-y: auto;
  flex-grow: 1;
  max-height: 430px;
  padding-right: 8px;
`;

export const CalendarDayInRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "rgb(115, 52, 234)" : "rgba(115, 52, 234, 0.1)"};
  color: ${({ $isSelected }) => ($isSelected ? "white" : "rgb(115, 52, 234)")};
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  cursor: pointer;
  margin: 2px;

  &:hover {
    background-color: rgba(115, 52, 234, 0.2);
  }
`;

// export const CalendarCells = styled.div`

// `;

// export const CalendarCells = styled.div`

// `;

// export const CalendarCells = styled.div`

// `;

// export const CalendarCells = styled.div`

// `;

// export const CalendarCells = styled.div`

// `;
