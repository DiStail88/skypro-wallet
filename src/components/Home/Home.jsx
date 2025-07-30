import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import AddTransactions from "../AddTransactions/AddTransactions";
import { getTransactions } from "../../services/api";
import {
  HomeBackground,
  HomeHeader,
  HomeLogo,
  HomePopExit,
  HomeLinkBlock,
  HomeLink,
  HomeHead,
  HomeBlock,
  HomeBB
} from "./Home.styled.js";
import { AuthContext } from "../../context/AuthContext";
import GlobalStyle from "../../GlobalStyle.js";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleTransactionAdded = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const freshTransactions = await getTransactions();
      setTransactions(freshTransactions);
    } catch (err) {
      setError("Не удалось обновить транзакции после добавления", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((tx) => tx._id !== id));
  };

  return (
    <>
      <GlobalStyle />
      <HomeBackground>
        <HomeHeader>
          <HomeLogo>
            <a href="/" target="_self" rel="noopener noreferrer">
              <img src={"Logo.svg"} alt="logo" />
            </a>
          </HomeLogo>
          <HomeLinkBlock>
            <HomeLink to="/">Мои расходы</HomeLink>
            <HomeLink to="/analisis">Анализ расходов</HomeLink>
          </HomeLinkBlock>
          <HomePopExit onClick={handleLogout}>Выйти</HomePopExit>
        </HomeHeader>
        <HomeBB>
          <HomeHead>Мои расходы</HomeHead>
          <HomeBlock>
            {" "}
            {isLoading ? (
              <p>Загрузка...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <TransactionsTable
                transactions={transactions}
                onDelete={handleDeleteTransaction}
              />
            )}
            <AddTransactions onTransactionAdded={handleTransactionAdded} />
          </HomeBlock>
        </HomeBB>
      </HomeBackground>
    </>
  );
};

export default Home;
