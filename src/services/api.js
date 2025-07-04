import axios from "axios";

const BASE_URL = "https://wedev-api.sky.pro/api";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUsers = async () => {
  try {
    const response = await instance.get("/user");
    return response.data.users;
  } catch (error) {
    console.error(
      "Ошибка получения пользователей:",
      error.response?.data || error.message
    );
    throw new Error("Не удалось получить список пользователей");
  }
};

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
      error.response?.data?.error ||
        "Пользователь с таким логином уже существует"
    );
  }
}

export async function signIn(userData) {
  try {
    const response = await axios.post(BASE_URL + "/user/login", userData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data.user;
  } catch (error) {
    console.error("Ошибка авторизации:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || "Неверный логин или пароль");
  }
}

export const fetchTasks = async (token) => {
  try {
    const response = await instance.get("/kanban", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.tasks;
  } catch (error) {
    console.error(
      "Ошибка получения задач:",
      error.response?.data || error.message
    );
    throw new Error("Не удалось получить задачи");
  }
};

export const fetchTaskById = async (id, token) => {
  try {
    const response = await instance.get(`/kanban/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.task;
  } catch (error) {
    console.error(
      "Ошибка получения задачи:",
      error.response?.data || error.message
    );
    throw new Error("Задача не найдена");
  }
};

export const addTask = async (taskData, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/kanban`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });
    return response.data.tasks;
  } catch (error) {
    console.error(
      "Ошибка добавления задачи:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.error || "Не удалось добавить задачу"
    );
  }
};

export const updateTask = async (id, taskData, token) => {
  try {
    const response = await axios.put(`${BASE_URL}/kanban/${id}`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });
    return response.data.tasks;
  } catch (error) {
    console.error(
      "Ошибка изменения задачи:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.error || "Не удалось изменить задачу"
    );
  }
};

export const deleteTask = async (id, token) => {
  try {
    const response = await instance.delete(`/kanban/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.tasks;
  } catch (error) {
    console.error(
      "Ошибка удаления задачи:",
      error.response?.data || error.message
    );
    throw new Error("Не удалось удалить задачу");
  }
};
