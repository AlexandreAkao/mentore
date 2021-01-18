import styled from 'styled-components';

import backgroundImg from '../../assets/images/background-entrepreneur.svg';

export const InstructionContainer = styled.section`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const InstructionCard = styled.div`
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(36, 43, 50, 0.2);
  box-shadow: 0px 18px 50px -15px rgba(25, 42, 89, 0.2);
  border-radius: 30px;
  max-width: 280px;
  min-width: 186px;
  padding: 20px;

  span {
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--white);
  }
`;

export const InstructionContent = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    color: var(--white);
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: center;
    width: 600px;
    margin-bottom: 70px;
  }

  div {
    display: flex;
    margin-bottom: 170px;
  }
`;

export const SelectObjective = styled.button`
  height: 34px;
  padding: 20px 40px;
  background-color: var(--tertiary);
  color: var(--white);
  border: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  border-radius: 68px;
  margin: 15px 10px;
  display: flex;
  align-items: center;
`;

export const FormEntrepreneur = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
  }

  .question-title {
    color: var(--dark-gray);
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 24px;
  }

  .select-objetive-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 900px;
  }
`;

export const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: var(--white);
  border: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  height: 50px;
  padding: 10px 70px;
  border-radius: 5px;
`;
