import { FC } from 'react';

import Header from '../../components/Header';
import LevelSelect from '../../components/LevelSelect';

import {
  InstructionContainer,
  InstructionContent,
  InstructionCard,
  FormEntrepreneur,
  SelectObjective,
  ButtonForm,
} from './styled';

import clockArrowImg from '../../assets/images/clock-arrow.svg';
import textMensageImg from '../../assets/images/text-mensage.svg';
import faceInSquareImg from '../../assets/images/face-in-square.svg';

import Footer from '../../components/Footer';

const EntrepreneurPage: FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div>
      <InstructionContainer>
        <Header loginStyle="green" />
        <InstructionContent>
          <span>Vamos traçar o seu perfil a partir dessas perguntas</span>
          <div>
            <InstructionCard>
              <img src={clockArrowImg} alt="instruction1" />
              <span>Demora menos de 5 minutos!</span>
            </InstructionCard>
            <InstructionCard>
              <img src={textMensageImg} alt="instruction2" />
              <span>Responda honestamente</span>
            </InstructionCard>
            <InstructionCard>
              <img src={faceInSquareImg} alt="instruction3" />
              <span>Tente não deixar respostas “neutras”</span>
            </InstructionCard>
          </div>
        </InstructionContent>
      </InstructionContainer>
      <FormEntrepreneur>
        <div>
          <span className="question-title">
            Qual o seu objetivo com a mentore?
          </span>
          <div className="select-objetive-container">
            <SelectObjective onClick={handleClick}>
              Validação de Ideia
            </SelectObjective>
            <SelectObjective onClick={handleClick}>
              Mentoria de Negócio
            </SelectObjective>
            <SelectObjective onClick={handleClick}>
              Referência para Negócio
            </SelectObjective>
            <SelectObjective onClick={handleClick}>
              Conhecimentos Pessoais
            </SelectObjective>
            <SelectObjective onClick={handleClick}>
              Conhecimentos Técnicos
            </SelectObjective>
          </div>
        </div>

        <div>
          <span className="question-title">
            Você se considera preparado para liderar pessoas?
          </span>
          <LevelSelect />
        </div>

        <div>
          <span className="question-title">
            Você se sente confortável para falar em público?
          </span>
          <LevelSelect />
        </div>

        <div>
          <span className="question-title">
            Você se sente confortável para trabalhar com outras pessoas?
          </span>
          <LevelSelect />
        </div>

        <div>
          <span className="question-title">
            Você se considera preparado para trabalhar com tecnologia e
            programação?
          </span>
          <LevelSelect />
        </div>

        <div>
          <span className="question-title">
            Você se considera preparado para trabalhar com marketing digital?
          </span>
          <LevelSelect />
        </div>

        <div>
          <span className="question-title">
            Você se considera preparado para trabalhar com design?
          </span>
          <LevelSelect />
        </div>

        <div>
          <span className="question-title">
            Você se considera apto para lidar com o financeiro da sua empresa?
          </span>
          <LevelSelect />
        </div>

        <ButtonForm onClick={handleClick}>Enviar</ButtonForm>
      </FormEntrepreneur>
      <Footer styleType="black" />
    </div>
  );
};

export default EntrepreneurPage;
