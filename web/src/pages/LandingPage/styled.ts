import styled from 'styled-components';

import backgroundImg from '../../assets/images/background.svg';
import backgroundFooterImg from '../../assets/images/background_footer.svg';

export const ContainerHero = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 310px;
`;

export const MainTitle = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-right: 620px;

  p {
    color: var(--secondary);
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
  }

  div {
    display: flex;
    flex-direction: column;
    max-width: 680px;
  }

  span {
    margin-top: 28px;
    color: var(--white);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ContainerBenefits = styled.article`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 56px;

  & > span {
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
    margin: auto 350px;
    color: var(--secondary);
  }

  sub {
    margin-top: 20px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--gray);
  }
`;

export const BenefitsContent = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: center;
  background-color: var(--white);
  box-shadow: 0px 18px 50px -15px rgba(25, 42, 89, 0.2);
  border-radius: 30px;
  padding: 1.5rem 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    width: 380px;

    img {
      margin-bottom: 24px;
    }

    span {
      font-size: 16px;
      text-align: center;
      font-style: normal;
      letter-spacing: 0em;
      text-align: center;
    }

    .benefits-title {
      margin-bottom: 16px;
      font-weight: 700;
      line-height: 19px;
      color: var(--secondary);
    }

    .benefits-description {
      font-weight: 400;
      line-height: 22px;
      color: var(--gray);
    }
  }
`;

export const CardBenefits = styled.div`
  width: 410;
`;

export const BenefitsRectangle = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const BenefitsSegment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  & > div {
    margin-right: 100px;
  }

  .benefits-segment-description {
    width: 480px;

    p {
      color: var(--secondary);
      font-size: 40px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 30px;
    }

    span {
      color: var(--gray);
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;

export const ContainerBottom = styled.div`
  background-image: url(${backgroundFooterImg});
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  padding-top: 300px;
`;

export const ContainerPlans = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

  & > p {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--white);
    width: 600px;
    margin-bottom: 20px;
  }

  .mark-green {
    background-color: transparent;
    font-weight: 900;
    color: var(--tertiary);
  }

  & > span {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--white);
    width: 800px;
    margin-bottom: 80px;
  }

  & > div {
    display: flex;
  }
`;

export const ButtonPlan = styled.button`
  border: 0;
  background: transparent;
  margin-bottom: 20px;
  border: 1px solid #2a407c;
  box-sizing: border-box;
  border-radius: 68px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: var(--white);
  padding: 10px 80px;
`;

export const CardPlan = styled.div`
  width: 320px;
  height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px 50px 20px;
  align-items: center;
  background-color: rgba(15, 31, 75, 0.7);
  box-shadow: 0px 18px 50px -15px rgba(25, 42, 89, 0.2);
  border-radius: 30px;

  :nth-child(2) {
    background-color: var(--white);
    transform: scale(1.05);
    box-shadow: 0px 18px 50px -15px #060f28;

    article > p {
      color: #172755;
    }

    .plan-value {
      color: #172755 !important;
    }

    ${ButtonPlan} {
      border: 0;
      background-color: var(--tertiary);
    }

    .plan-advantage {
      span {
        color: #172755 !important;
      }
    }
  }

  & > article {
    display: flex;
    flex-direction: column;
  }

  article > p {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--white);
    margin-bottom: 10px;
    margin-top: 50px;
  }

  article > span {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--gray);
    border-bottom: 1px solid #2a407c;
    padding: 0 40px;
  }

  .plan-value {
    margin-top: 30px;
    color: var(--white) !important;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    border: 0;
  }

  .plan-value-number {
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: center;
  }

  .plan-per {
    border: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }

  .plan-advantage-list {
    margin-top: 30px;
  }

  .plan-advantage {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    span {
      margin-left: 30px;
      width: 200px;
      display: flex;
      color: var(--white);
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
    }
  }
`;
