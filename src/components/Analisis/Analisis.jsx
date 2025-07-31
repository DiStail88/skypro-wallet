import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import CategoryChart from "../CategoryChart/CategoryChart";
import { getTransactions } from "../../services/api";
import {
  AnalisisBackground,
  AnalisisHeader,
  AnalisisLogo,
  AnalisisPopExit,
  AnalisisLinkBlock,
  AnalisisLink,
  AnalisisHead,
  AnalisisBlock,
  AnalisisBB,
  AnalisisGrafBlock,
  CalendarBlock,
} from "./Analisis.styled.js";
import GlobalStyle from "../../GlobalStyle.js";

const Analisis = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDateSelect = (date) => {
    if (!dateRange.start || dateRange.end) {
      // Если нет начальной даты или уже есть диапазон - начинаем новый
      setDateRange({ start: date, end: null });
    } else if (date < dateRange.start) {
      // Если выбрана дата раньше начальной - меняем диапазон
      setDateRange({ start: date, end: dateRange.start });
    } else {
      // Завершаем выбор диапазона
      setDateRange({ ...dateRange, end: date });
    }
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (err) {
        console.error("Ошибка при загрузке транзакций", err);
        setError("Не удалось загрузить транзакции");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <>
      <AnalisisBackground>
        <AnalisisHeader>
          <AnalisisLogo>
            <a href="/" target="_self" rel="noopener noreferrer">
              <img src={"Logo.svg"} alt="logo" />
            </a>
          </AnalisisLogo>
          <AnalisisLinkBlock>
            <AnalisisLink to="/">Мои расходы</AnalisisLink>
            <AnalisisLink to="/analisis">Анализ расходов</AnalisisLink>
          </AnalisisLinkBlock>
          <AnalisisPopExit onClick={handleLogout}>Выйти</AnalisisPopExit>
        </AnalisisHeader>
        <AnalisisBB>
          <AnalisisHead>Анализ расходов</AnalisisHead>
          <AnalisisBlock>
            <CalendarBlock>
              <Calendar
                selectedDate={dateRange.start}
                rangeStart={dateRange.start}
                rangeEnd={dateRange.end}
                onSelectDate={handleDateSelect}
              />
            </CalendarBlock>

            <AnalisisGrafBlock>
              {isLoading ? (
                <p>Загрузка данных...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <CategoryChart
                  transactions={transactions}
                  dateRange={dateRange}
                />
              )}
            </AnalisisGrafBlock>
          </AnalisisBlock>
        </AnalisisBB>
      </AnalisisBackground>
    </>
  );
};

export default Analisis;
