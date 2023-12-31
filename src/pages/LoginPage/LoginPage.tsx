import { useContext, useRef } from "react";
import Header from "../../components/Header/Header";
import "./LoginPage.scss";
import { AuthContext } from "../../App";

interface LoginInfo {
  email: string;
  password: string;
}

const LoginPage = (): JSX.Element => {
  const API_URL_LOGIN = `${process.env.REACT_APP_API_URL as string}/user/login`;
  const authInfo = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.FormEvent): void => {
    event.preventDefault();

    const loginInfo: LoginInfo = {
      email: emailRef?.current?.value as string,
      password: passwordRef?.current?.value as string,
    };

    if (!loginInfo.email || !loginInfo.password) {
      alert("Email y la contraseña son obligatorios!");
    } else {
      doLoginRequest(loginInfo);
    }
  };

  const doLoginRequest = (loginInfo: LoginInfo): void => {
    fetch(API_URL_LOGIN, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Login incorrecto");
        }
        return await response.json();
      })
      .then((data) => {
        // Login OK -> Guardamos las credenciales
        if (data.token && data.user && authInfo.login) {
          authInfo.login(data.token, data.user);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <div className="login-page page">
      <Header></Header>

      <h1>LoginPage!</h1>

      {authInfo?.userInfo ? (
        <>
          <p>Bienvenido { authInfo.userInfo.firstName }</p>
          <p>Si quieres salir pulsa aquí</p>
          <button onClick={authInfo.logout}>Log out</button>
        </>
      ) : (
        <form onSubmit={submitForm} className="login-page__form">
          <label htmlFor="email">Email:</label>
          <input ref={emailRef} type="text" id="email" />

          <label htmlFor="password">Password:</label>
          <input ref={passwordRef} type="text" id="password" />

          <input type="submit" title="Log in" />
        </form>
      )}
    </div>
  );
};

export default LoginPage;
