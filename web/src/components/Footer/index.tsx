import { FC } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from './styled';
import { IFooterProps } from './types';

import logoWhiteImg from '../../assets/images/logo-white.svg';
import logoGreenImg from '../../assets/images/logo-green.svg';

const Footer: FC<IFooterProps> = ({ styleType = 'white' }) => {
  return (
    <Container styleType={styleType}>
      <div>
        <Link to="/">
          <img
            src={styleType === 'white' ? logoWhiteImg : logoGreenImg}
            alt="logo"
          />
        </Link>
        <div>
          <ul>
            <li>Cursos</li>
            <li>Mentores</li>
            <li>Planos</li>
            <li>Suporte</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <FaFacebookF color={styleType} size={25} />
            </li>
            <li>
              <FaTwitter color={styleType} size={25} />
            </li>
            <li>
              <FaInstagram color={styleType} size={25} />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
