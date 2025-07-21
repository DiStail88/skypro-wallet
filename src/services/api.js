import axios from "axios";

const BASE_URL = "https://wedev-api.sky.pro/api";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "",
  },
});

// Получение токена из localStorage
const getAuthToken = () => {
  try {
    const storedUser = localStorage.getItem("userInfo");
    return storedUser ? JSON.parse(storedUser).token : null;
  } catch {
    return null;
  }
};

// Получение пользователей
export const fetchUsers = async () => {
  try {
    const response = await instance.get("/user");
    return response.data.users;
  } catch (error) {
    console.error("Ошибка получения пользователей:", error.response?.data || error.message);
    throw new Error("Не удалось получить список пользователей");
  }
};

// Регистрация
export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(
      BASE_URL + "/user",
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return response.data.user;
  } catch (error) {
    console.error("Ошибка регистрации:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.error || "Пользователь с таким логином уже существует"
    );
  }
}

// Авторизация
export async function signIn(userData) {
  try {
    const response = await axios.post(BASE_URL + "/user/login", userData, {
      headers: {
        "Content-Type": "",
      },
    });
    const { user, token } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify({ ...user, token }));
    return user;
  } catch (error) {
    console.error("Ошибка авторизации:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || "Неверный логин или пароль");
  }
}

// Получение транзакций
export const getTransactions = async (sortBy = "", filterBy = "") => {
  const token = getAuthToken();

  try {
    const params = new URLSearchParams();
    if (sortBy) params.append("sortBy", sortBy);
    if (filterBy) params.append("filterBy", filterBy);

    const response = await instance.get(`/transactions?${params.toString()}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка получения транзакций:", error.response?.data || error.message);
    throw new Error("Не удалось получить транзакции");
  }
};

// Добавление транзакции
export const addTransaction = async (transaction) => {
  const token = getAuthToken();

  try {
    const response = await instance.post("/transactions", transaction, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при добавлении транзакции:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || "Не удалось добавить транзакцию");
  }
};

// Удаление транзакции
export const deleteTransaction = async (id) => {
  const token = getAuthToken();

  try {
    await instance.delete(`/transactions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Ошибка при удалении транзакции:", error.response?.data || error.message);
    throw new Error("Не удалось удалить транзакцию");
  }
};
