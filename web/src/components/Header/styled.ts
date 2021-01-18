import styled from 'styled-components';

import { IHeaderProps } from './types';

const loginStyle = {
  green: {
    background: 'var(--tertiary) !important',
    text: 'var(--white) !important',
  },
  white: {
    background: 'var(--white) !important',
    text: 'var(--tertiary) !important',
  },
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  img {
    height: 50px;
  }
`;

export const Navagation = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ul:first-child {
    margin-left: 100px;
    margin-right: 300px;
  }

  li {
    margin: 0 18px;
    color: var(--white);
    cursor: pointer;
    font-size: 18px;

    font-weight: 500;
  }

  button {
    color: var(--white);
    padding: 0;
    margin: 0;
    background: none;
    border: 0;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Login = styled.li<IHeaderProps>`
  padding: 12px 54px;
  border: 0;
  border-radius: 68px;
  background-color: ${props => loginStyle[props.loginStyle].background};
  font-weight: bold !important;
  color: ${props => loginStyle[props.loginStyle].text};
`;
