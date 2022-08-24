import React from 'react';

import FormLogin from '../../components/FormLogin';

import logo from '../../assets/img/logo-mercado-livre.png';

import './styles.css';

const Login: React.FC = () => {
  return (
    <section className="login-container">
      <section className="login-box">
        <header>
          <img src={ logo } alt="logo meli" />
          <p>Contato</p>
        </header>
        <FormLogin
          title="Olá! Digite o seu telefone, e-mail ou usuário"
          labelText="Telefone, e-mail ou usuário"
        />
      </section>
      <article className="box-priv">
        <p>
          Protegido por reCAPTCHA
          <span>-</span>
          <a href="">Privacidade</a>
          <span>-</span>
          <a href="">Condições</a>
        </p>
      </article>
      <footer className="footer-login">
        <small>Como cuidamos da sua privacidade</small>
        <small>Copyright © 1999-2022 Ebazar.com.br LTDA.</small>
      </footer>
    </section>
  );
}

export default Login;
