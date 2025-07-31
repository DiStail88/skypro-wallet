import styled from "styled-components";

export const CategoryChartH4 = styled.div`
  padding-top: 12px;
  padding-bottom: 21px;
  display: flex;
  gap: 4px;
`;

export const CategoryChartSpan1 = styled.div`
  color: rgb(153, 153, 153);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
`;

export const CategoryChartSpan2 = styled.div`
  color: rgb(153, 153, 153);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0px;
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
  color: ${({ $isSelected }) => 
    $isSelected ? "white" : "rgb(115, 52, 234)"};
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

// export const RegisterHeader = styled.div`

// `;

// export const RegisterHeader = styled.div`

// `;

// export const RegisterHeader = styled.div`

// `;

