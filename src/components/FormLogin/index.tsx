import React from 'react';

type Props = {
  title: string;
  labelText: string;
}

const FormLogin: React.FC<Props> = ({ title, labelText }) => {

  return (
    <form>
      <h1 className="form-title">{ title }</h1>
      <label htmlFor="">
        {labelText}
        <input type="email"/>
      </label>
      <button className="btn-continue" type="button">CONTINUAR</button>
      <button className="btn-create" type="button">Criar conta</button>
      <p className="p-help">Preciso de ajuda para entrar</p>
    </form>
  );
}

export default FormLogin;
