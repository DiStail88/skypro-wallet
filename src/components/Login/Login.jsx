import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import {
  LoginBackground,
  LoginHeader,
  Logo,
  LoginBlock,
  LoginHead,
  LoginForm,
  LoginInputBlock,
  LoginInput,
  LoginButton,
  LoginError,
  LoginLink,
} from "./Login.styled.js";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

  const handleLogin = () => {
    if (!form.login.trim() || !form.password.trim()) {
      setError(
        "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку."
      );
      return;
    }

    const fakeUser = {
      name: form.login,
      token: "123456",
    };

    login(fakeUser);
    navigate("/");
  };

  const isFieldValid = (field) => form[field].trim() !== "";

  return (
    <LoginBackground>
      <LoginHeader>
        <Logo>
          <a href="/" target="_self" rel="noopener noreferrer">
            <img src={"Logo.svg"} alt="logo" />
          </a>
        </Logo>
      </LoginHeader>
      <LoginBlock>
        <LoginForm onSubmit={(e) => e.preventDefault()}>
          <LoginHead>
            <h1>Вход</h1>
          </LoginHead>
          <LoginInputBlock>
            <LoginInput
              type="text"
              name="login"
              placeholder={error && !isFieldValid("login") ? "Эл. почта *" : "Эл. почта"}
              value={form.login}
              onChange={handleChange}
              required
              $hasError={!!error && !isFieldValid("login")}
              $isValid={isFieldValid("login") && !error}
            />
            <LoginInput
              type="password"
              name="password"
              placeholder={error && !isFieldValid("password") ? "Пароль *" : "Пароль"}
              value={form.password}
              onChange={handleChange}
              required
              $hasError={!!error && !isFieldValid("password")}
              $isValid={isFieldValid("password") && !error}
            />
          </LoginInputBlock>
          {error && <LoginError>{error}</LoginError>}
          <LoginButton type="button" onClick={handleLogin}>
            Войти
          </LoginButton>
          <LoginLink>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/register">Регистрируйтесь здесь</Link>
          </LoginLink>
        </LoginForm>
      </LoginBlock>
    </LoginBackground>
  );
};

export default Login;

