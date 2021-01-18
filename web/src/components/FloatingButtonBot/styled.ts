import styled from 'styled-components';
import { Button } from 'react-floating-action-button';

import logo from '../../assets/images/robot.svg';

export const FloatingButton = styled(Button)`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 65% !important;
  background-color: var(--dark-gray) !important;
  padding: 20% !important;
  width: 80px;
  height: 80px;
  left: 5vw;
  bottom: -3vw;
`;

export const Modal = styled.div`
  div {
    width: auto !important;
  }
`;
