import { useCallback, useState, useEffect, useContext } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import {
  fetchTasks,
  addTask as apiAddTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from "../services/api";

const TaskProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTasks = useCallback(async () => {
    if (!user?.token) return;
    try {
      setLoading(true);
      const fetched = await fetchTasks(user.token);
      setTasks(fetched);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const addTask = async (taskData) => {
    try {
      const updated = await apiAddTask(taskData, user.token);
      setTasks(updated);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const updated = await apiUpdateTask(id, taskData, user.token);
      setTasks(updated);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    const taskToUpdate = tasks.find((task) => task._id === taskId);
    if (!taskToUpdate) return;

    const updatedTask = { ...taskToUpdate, status: newStatus };

    setTasks((prev) =>
      prev.map((task) => (task._id === taskId ? updatedTask : task))
    );

    try {
      await apiUpdateTask(taskId, updatedTask, user.token);
    } catch (err) {
      console.error("Ошибка при обновлении статуса:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await apiDeleteTask(id, user.token);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const clearTasks = () => setTasks([]); // <-- вот эта строка

  useEffect(() => {
    if (user?.token) loadTasks();
  }, [user, loadTasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        fetchTasks: loadTasks,
        addTask,
        updateTask,
        updateTaskStatus,
        deleteTask,
        clearTasks, // <-- добавлено
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
