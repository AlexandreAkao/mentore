/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import Header from '../../components/Header';
import Button from '../../components/Button';
import CardImage from '../../components/CardImage';
import Footer from '../../components/Footer';

import clockImg from '../../assets/images/clock.svg';
import monitorImg from '../../assets/images/monitor.svg';
import rocketImg from '../../assets/images/rocket.svg';
import img1 from '../../assets/images/undraw_discount_d4bd 1.svg';
import img2 from '../../assets/images/undraw_online_connection_6778 1.svg';
import img3 from '../../assets/images/undraw_youtube_tutorial_2gn3 1.svg';

import {
  ContainerHero,
  MainTitle,
  ContainerBenefits,
  BenefitsContent,
  BenefitsRectangle,
  BenefitsSegment,
  ContainerBottom,
  ContainerPlans,
  CardPlan,
  ButtonPlan
} from './styled';

const LandingPage: FC = () => {
  return (
    <div>
      <ContainerHero>
        <Header loginStyle="green" />
        <MainTitle>
          <div>
            <p>Formamos</p>
            <p>Empreendedores.</p>
            <p>Estimulamos Soluções!</p>
            <span>
              Mentore é a plataforma que conecta empreendedores e mentores de
              todo o Brasil. Por meio de nossa inteligência artificial, você
              receberá os conteúdos que faltam para sua empresa sair do papel.
            </span>
            <Link to="/cadastro">
              <Button
                backgroundType="tertiary"
                customStyle={{ marginTop: '50px' }}
                text="Abrir Conta Grátis"
              />
            </Link>
          </div>
        </MainTitle>
      </ContainerHero>
      <ContainerBenefits>
        <span>
          Aumente a eficiência do seu aprendizado com a plataforma ideal para
          empreendedores
        </span>
        <sub>
          Venha crescer com a Mentore, a principal plataforma para formar
          empreendedores.
        </sub>
        <Button customStyle={{ marginTop: '30px' }} text="Comece a jornada" />
        <BenefitsContent>
          <div>
            <img src={clockImg} alt="clock" />
            <span className="benefits-title">
              Identifique seu perfil empreendedor
            </span>
            <span className="benefits-description">
              Preencha nosso formulário e compreenda quais skills você já possui
              como diferencial e quais precisa desenvolver para tirar seu
              projeto do papel.
            </span>
          </div>

          <div>
            <img src={monitorImg} alt="clock" />
            <span className="benefits-title">Match com Mentores</span>
            <span className="benefits-description">
              Nossa plataforma possui mentores qualificados e selecionados para
              resolver as dores específicas de cada empreendedor em potencial.
            </span>
          </div>

          <div>
            <img src={rocketImg} alt="clock" />
            <span className="benefits-title">
              Cursos recomendados para você
            </span>
            <span className="benefits-description">
              Por meio da nossa inteligência artificial, receba recomendações de
              cursos e qualificações específicas para você, que complementarão
              suas habilidades de empreendedorismo.
            </span>
          </div>
        </BenefitsContent>
      </ContainerBenefits>
      <BenefitsRectangle>
        <BenefitsSegment>
          <div className="benefits-segment-description">
            <p>Conexão com Mentores e Empreendedores</p>
            <span>
              Mapeamos todas as principais iniciativas empreendedoras do Brasil!
              Faça contato com o ecossistema empreendedor perto de você e fique
              por dentro dos principais eventos de empreendedorismo na sua
              localidade.
            </span>
          </div>
          <CardImage src={img1} alt="chart" />
        </BenefitsSegment>

        <BenefitsSegment>
          <CardImage src={img2} alt="chart" />
          <div className="benefits-segment-description">
            <p>Cursos Recomendados e Clube de Benefícios</p>
            <span>
              Para cada conteúdo recomendado que você adquirir, você receberá
              Mentor Points, que podem ser utilizados em nosso Clube de
              Benefícios para trocar por outros produtos.
            </span>
          </div>
        </BenefitsSegment>

        <BenefitsSegment>
          <div className="benefits-segment-description">
            <p>Oportunidades e Conteúdos Exclusivos</p>
            <span>
              Acompanhe em tempo real todas as novidades do mercado tecnológico
              e digital, e fique por dentro das principais tendências que estão
              surgindo! E mais: Ganhe acesso ao nosso banco de conteúdos
              exclusivos e se aprofunde em temas voltados para tecnologia.
            </span>
          </div>
          <CardImage src={img3} alt="chart" />
        </BenefitsSegment>
      </BenefitsRectangle>
      <ContainerBottom>
        <ContainerPlans>
          <p>A <mark className="mark-green">mentore</mark> tem o melhor custo-benefício do mercado</p>
          <span>
            O plano gratuito dará acesso a toda plataforma, sem contar com as
            exclusividades que somente o premium pode te dar com conteúdos
            exclusivos, clube de benefícios e mais mentorias!
          </span>
          <div>
            <CardPlan>
              <article>
                <p>Grátis</p>
                <span>para começar</span>
                <span className="plan-value">
                  R$<span className="plan-value-number">0</span>
                </span>
                <span className="plan-per">pra vida</span>
                <div className="plan-advantage-list">
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#4206D1" />
                    <span>Direcionamento Personalizado</span>
                  </div>
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#4206D1" />
                    <span>1 Mentoria a cada 3 Meses</span>
                  </div>
                </div>
              </article>
              <ButtonPlan>Saiba Mais</ButtonPlan>
            </CardPlan>
            <CardPlan>
              <article>
                <p>Anual</p>
                <span>mais rentável</span>
                <span className="plan-value">
                  R$<span className="plan-value-number">159</span>
                </span>
                <span className="plan-per">por ano</span>
                <div className="plan-advantage-list">
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#04C497" />
                    <span>Direcionamento Personalizado</span>
                  </div>
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#04C497" />
                    <span>3 Mentorias/Mês</span>
                  </div>
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#04C497" />
                    <span>Clube de Benefícios</span>
                  </div>
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#04C497" />
                    <span>Report de Mercado</span>
                  </div>
                </div>
              </article>
              <ButtonPlan>Saiba Mais</ButtonPlan>
            </CardPlan>
            <CardPlan>
              <article>
                <p>Mensal</p>
                <span>para o momento</span>
                <span className="plan-value">
                  R$<span className="plan-value-number">15,90</span>
                </span>
                <span className="plan-per">por mês</span>
                <div className="plan-advantage-list">
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#4206D1" />
                    <span>Direcionamento Personalizado</span>
                  </div>
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#4206D1" />
                    <span>3 Mentorias/Mês</span>
                  </div>
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#4206D1" />
                    <span>Clube de Benefícios</span>
                  </div>
                  <div className="plan-advantage">
                    <FaCheck size={40} color="#4206D1" />
                    <span>Report de Mercado</span>
                  </div>
                </div>
              </article>
              <ButtonPlan>Saiba Mais</ButtonPlan>
            </CardPlan>
          </div>
        </ContainerPlans>
        <Footer styleType="white" />
      </ContainerBottom>
    </div>
  );
};

export default LandingPage;
