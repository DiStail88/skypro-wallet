import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RegisterBackground,
  RegisterHeader,
  Logo,
  RegisterBlock,
  RegisterHead,
  RegisterForm,
  RegisterInputBlock,
  RegisterInput,
  RegisterButton,
  RegisterError,
  RegisterLink,
} from "./Register.styled";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleRegister = () => {
    const { username, login, password } = form;

    if (!username.trim() || !login.trim() || !password.trim()) {
      setError(
        "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку."
      );
      return;
    }
    console.log("Registered:", form);
    navigate("/login");
  };

  const isFieldValid = (field) => form[field].trim() !== "";

  return (
    <RegisterBackground>
      <RegisterHeader>
        <Logo>
          <a href="/" target="_self" rel="noopener noreferrer">
            <img src="Logo.svg" alt="logo" />
          </a>
        </Logo>
      </RegisterHeader>
      <RegisterBlock>
        <RegisterForm onSubmit={(e) => e.preventDefault()}>
          <RegisterHead>
            <h1>Регистрация</h1>
          </RegisterHead>
          <RegisterInputBlock>
            <RegisterInput
              type="text"
              name="username"
              placeholder={error && !isFieldValid("username") ? "Имя пользователя *" : "Имя пользователя"}
              value={form.username}
              onChange={handleChange}
              $hasError={!!error && !isFieldValid("username")}
              $isValid={isFieldValid("username") && !error}
              required
            />
            <RegisterInput
              type="text"
              name="login"
              placeholder={error && !isFieldValid("login") ? "Эл. почта *" : "Эл. почта"}
              value={form.login}
              onChange={handleChange}
              $hasError={!!error && !isFieldValid("login")}
              $isValid={isFieldValid("login") && !error}
              required
            />
            <RegisterInput
              type="password"
              name="password"
              placeholder={error && !isFieldValid("password") ? "Пароль *" : "Пароль"}
              value={form.password}
              onChange={handleChange}
              $hasError={!!error && !isFieldValid("password")}
              $isValid={isFieldValid("password") && !error}
              required
            />
          </RegisterInputBlock>
          {error && <RegisterError>{error}</RegisterError>}
          <RegisterButton type="button" onClick={handleRegister}>
            Зарегистрироваться
          </RegisterButton>
          <RegisterLink>
            <p>Уже есть аккаунт?</p>
            <Link to="/login">Войдите здесь</Link>
          </RegisterLink>
        </RegisterForm>
      </RegisterBlock>
    </RegisterBackground>
  );
};

export default Register;
