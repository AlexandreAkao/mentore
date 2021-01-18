/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { Container } from 'react-floating-action-button';
import { Popup } from 'reactjs-popup';
import ChatBot from 'react-simple-chatbot';

import { FloatingButton, Modal } from './styled';
import 'reactjs-popup/dist/index.css';

const FloatingButtonBot: FC = () => {
  return (
    <Container>
      <Popup trigger={() => <FloatingButton tooltip="Chatbot" />} modal nested>
        {(close: any) => (
          <Modal>
            <ChatBot
              steps={[
                {
                  id: '1',
                  message:
                    'Olá! Sou MentorBot, atendente digital aqui na Mentore.',
                  trigger: '2',
                },
                {
                  id: '2',
                  message: 'Como posso te ajudar?',
                  trigger: '3',
                },
                {
                  id: '3',
                  options: [
                    { value: 1, label: 'Como funciona', trigger: '4' },
                    { value: 2, label: 'Realize seu cadastro', trigger: '4' },
                    { value: 3, label: 'Conheça nossos pacotes', trigger: '4' },
                    {
                      value: 4,
                      label: 'Conheça nosso ranking de mentores',
                      trigger: '4',
                    },
                  ],
                },
                {
                  id: '4',
                  message:
                    'A mentore é uma plataforma que vai te ajudar em sua jornada empreendedora. Te direcionaremos a conteúdos, cursos e eventos de acordo com sua necessidade. Além de te conectarmos com mentores que vão te auxiliar em seus próximos passos.',
                  trigger: '5',
                },
                {
                  id: '5',
                  options: [
                    { value: 1, label: 'Realize seu cadastro', trigger: '6' },
                    { value: 2, label: 'Conteúdos disponíveis', trigger: '6' },
                    { value: 3, label: 'Cursos e eventos', trigger: '6' },
                    {
                      value: 4,
                      label: 'Quero uma mentoria',
                      trigger: '6',
                    },
                    {
                      value: 5,
                      label: 'Retornar ao menu principal',
                      trigger: '6',
                    },
                  ],
                },
                {
                  id: '6',
                  message: 'Bacana! Em qual tema você mais sente necessidade?',
                  trigger: '7',
                },
                {
                  id: '7',
                  options: [
                    { value: 1, label: 'Comercial', end: true },
                    { value: 2, label: 'Financeiro', end: true },
                    { value: 3, label: 'Marketing', end: true },
                    { value: 4, label: 'Design', end: true },
                    { value: 5, label: 'Tecnologia', end: true },
                    { value: 6, label: 'Liderança', end: true },
                    { value: 7, label: 'Oratória', end: true },
                    { value: 8, label: 'Trabalho em equipe', end: true },
                  ],
                },
              ]}
            />
          </Modal>
        )}
      </Popup>
    </Container>
  );
};

export default FloatingButtonBot;
