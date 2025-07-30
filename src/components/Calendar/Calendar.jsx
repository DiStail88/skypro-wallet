import React, { useState } from "react";
import {
  CalendarWrapper,
  CalendarTitle,
  CalendarMonthYear,
  CalendarDaysOfWeek,
  CalendarCellWeekday,
  CalendarCells,
  CalendarTop,
  CalendarDay,
  CalendarEmptyCell,
  ScrollableCalendarCells,
} from "./Calendar.styled.js";

const DAYS_OF_WEEK = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const Month = ({ year, month, selectedDate, onSelectDate }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const startDayIndex = (firstDayOfWeek + 6) % 7;

  const cells = [];

  for (let i = 0; i < startDayIndex; i++) {
    cells.push(<CalendarEmptyCell key={`empty-${year}-${month}-${i}`} />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected =
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year;

    cells.push(
      <CalendarDay
        key={`${year}-${month}-${day}`}
        $isSelected={isSelected}
        onClick={() => onSelectDate(new Date(year, month, day))}
      >
        {day}
      </CalendarDay>
    );
  }

  const formatter = new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    year: "numeric",
  });
  const parts = formatter.formatToParts(new Date(year, month));
  const monthName = parts.find((p) => p.type === "month")?.value;
  const yearNum = parts.find((p) => p.type === "year")?.value;
  const formattedTitle = `${
    monthName.charAt(0).toUpperCase() + monthName.slice(1)
  } ${yearNum}`;

  return (
    <div style={{ marginBottom: "30px" }}>
      <CalendarMonthYear>{formattedTitle}</CalendarMonthYear>
      <CalendarCells>{cells}</CalendarCells>
    </div>
  );
};

const Calendar = ({ selectedDate, onSelectDate }) => {
  const [startDate] = useState(new Date());

  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();

  const monthsToShow = 3;

  // Генерируем массив месяцев
  const months = [];
  for (let i = 0; i < monthsToShow; i++) {
    const month = (startMonth + i) % 12;
    const year = startYear + Math.floor((startMonth + i) / 12);
    months.push({ year, month });
  }


  return (
    <CalendarWrapper>
      <CalendarTitle>Период</CalendarTitle>

      <CalendarTop>
        <CalendarDaysOfWeek>
          {DAYS_OF_WEEK.map((day) => (
            <CalendarCellWeekday key={day}>{day}</CalendarCellWeekday>
          ))}
        </CalendarDaysOfWeek>
      </CalendarTop>


      <ScrollableCalendarCells>
        {months.map(({ year, month }) => (
          <Month
            key={`${year}-${month}`}
            year={year}
            month={month}
            selectedDate={selectedDate}
            onSelectDate={onSelectDate}
          />
        ))}
      </ScrollableCalendarCells>
    </CalendarWrapper>
  );
};

export default Calendar;
