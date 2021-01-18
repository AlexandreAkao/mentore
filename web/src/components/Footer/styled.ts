import styled from 'styled-components';

import { IFooterProps } from './types';

export const Container = styled.footer<IFooterProps>`
  display: flex;
  justify-content: center;

  & > div {
    border-top: 1px solid var(--tertiary);
    padding: 60px 0 40px 0;
    width: 70%;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      ul {
        display: flex;

        li {
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 17px;
          letter-spacing: 0em;
          text-align: left;
          color: ${props =>
            props.styleType === 'white' ? 'var(--white)' : 'var(--secondary)'};
          margin: 0 20px;

          :last-child {
            margin: 0 0 0 20px !important;
          }
        }
      }
    }
  }
`;
