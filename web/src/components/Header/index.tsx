import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IHeaderProps } from './types';

import { Container, Navagation, Login } from './styled';

import logoImg from '../../assets/images/logo.svg';

const Header: FC<IHeaderProps> = ({ loginStyle = 'green' }) => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="logo" />
      </Link>
      <Navagation>
        <ul>
          <li>Cursos</li>
          <li>Mentores</li>
          <li>Planos</li>
          <li>Suporte</li>
        </ul>
        <ul>
          <li>
            <Link to="/cadastro">
              <button type="button">Cadastre-se</button>
            </Link>
          </li>
          <Login loginStyle={loginStyle}>Entrar</Login>
        </ul>
      </Navagation>
    </Container>
  );
};

export default Header;
