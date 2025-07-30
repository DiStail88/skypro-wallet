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
  const [selectedDate, setSelectedDate] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
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
      <GlobalStyle />
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
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
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
                  selectedDate={selectedDate}
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
