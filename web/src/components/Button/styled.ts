import styled from 'styled-components';

import { IButtonProps } from './types';

export const Button = styled.button<Omit<IButtonProps, 'text'>>`
  background-color: ${props => `var(--${props.backgroundType})`};
  width: 300px;
  padding: 16px;
  border: 0;
  border-radius: 68px;
  color: ${props => `var(--${props.textType})`};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: 0em;
`;
