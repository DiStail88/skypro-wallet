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
import { signIn } from "../../services/api.js";

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

  const isFieldValid = (field) => form[field].trim() !== "";
  const isFormInvalid = !isFieldValid("login") || !isFieldValid("password");

  const handleLogin = async () => {
    if (isFormInvalid) {
      setError(
        "Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку."
      );
      return;
    }

    try {
      const userData = await signIn({
        login: form.login,
        password: form.password,
      });

      login({
        name: userData.name,
        token: userData.token,
      });

      navigate("/");
    } catch (err) {
      setError(err.message || "Ошибка входа");
    }
  };

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
              placeholder={
                error && !isFieldValid("login") ? "Эл. почта *" : "Эл. почта"
              }
              value={form.login}
              onChange={handleChange}
              required
              $hasError={!!error && !isFieldValid("login")}
              $isValid={isFieldValid("login") && !error}
            />
            <LoginInput
              type="password"
              name="password"
              placeholder={
                error && !isFieldValid("password") ? "Пароль *" : "Пароль"
              }
              value={form.password}
              onChange={handleChange}
              required
              $hasError={!!error && !isFieldValid("password")}
              $isValid={isFieldValid("password") && !error}
            />
          </LoginInputBlock>
          {error && <LoginError>{error}</LoginError>}
          <LoginButton
            type="button"
            onClick={handleLogin}
            disabled={!!error || isFormInvalid}
          >
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
