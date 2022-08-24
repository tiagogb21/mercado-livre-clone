import React from 'react';

import logo from "../../assets/img/logo-mercado-livre.png";
import { GrLocation } from 'react-icons/gr'
import Input from '../general/InputElement';
import ShoppingCartButton from '../ShoppingCartButton';
import Categories from '../Categories';

import './styles.css';

const Header: React.FC = () => {
  return (
    <header>
      <section className="container-header-top">
        <img className="logo-meli" src={logo} alt="logo mercado livre" />
        <Input
          data-testid="home-initial-message"
          type="text"
          // handleChange={handleChange}
          placeholder="Buscar produtos, marcas e muito mais"
          className="input-search"
        />
        <img
          className="img-disney-plus"
          src="https://http2.mlstatic.com/D_NQ_806934-MLA50801953236_072022-OO.webp"
          alt=" disney plus"
        />
      </section>
      <nav>
        <article className="nav-left">
          <p>
            <GrLocation />
          </p>
          <a href="">
            Informe seu <span>CEP</span>
          </a>
        </article>

        <article className="nav-middle">
          <Categories />
          <a href="">Ofertas do dia</a>
          <a href="">Histórico</a>
          <a href="">Moda</a>
          <a href="">Vender</a>
          <a href="">Contato</a>
        </article>

        <article className="nav-right">
          <a href="">Crie a sua conta</a>
          <a href="">Entre</a>
          <a href="">Compras</a>
          <ShoppingCartButton />
        </article>
      </nav>
    </header>
  );
}

export default Header;
