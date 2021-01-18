import styled from 'styled-components';

import backgroundImg from '../../assets/images/background_signup.svg';

export const SignUpContainer = styled.section`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 310px;
`;

export const SignUpForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
  margin-right: 40rem;

  p {
    font-size: 50px;
    font-weight: 800;
    line-height: 60px;
    text-align: left;
    width: 490px;
    margin-bottom: 56px;
  }

  .signup-inputs-container {
    width: 680px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 20px;

    input {
      padding-left: 20px;
      height: 50px;
      width: 315px;
      background: var(--light-gray);
      border: 1.5px solid #000000;
      font-size: 18px;

      border-radius: 5px;

      ::placeholder {
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--dark-gray);
      }
    }
  }

  .signup-radio-container {
    margin-bottom: 38px;

    & > span {
      font-size: 18px;
      font-weight: bold;
      line-height: 28px;
      text-align: left;
      color: var(--dark-gray);
      margin-right: 62px;
    }

    label {
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      margin: 0 32px;
      position: relative;
      cursor: pointer;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      input:checked ~ .checkmark {
        background-color: var(--dark-gray);
      }

      input:checked ~ .checkmark:after {
        display: block;
        content: '';
        position: absolute;
        left: 4px;
        top: -2px;
        width: 5px;
        height: 15px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg) scale(0.7);
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: -25px;
        height: 18px;
        width: 18px;
        background-color: #eee;
        border: 1px solid var(--dark-gray);
        border-radius: 4px;
        background-color: transparent;
      }
    }
  }
`;

export const ButtonNext = styled.button`
  height: 50px;
  background-color: var(--dark-gray);
  border-radius: 5px;
  padding: 0 3rem;
  border: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white);
`;
