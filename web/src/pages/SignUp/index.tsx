import { FC } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { SignUpContainer, SignUpForm, ButtonNext } from './styled';

const SignUp: FC = () => {
  return (
    <div>
      <SignUpContainer>
        <Header loginStyle="white" />
        <SignUpForm>
          <div>
            <p>O primeiro passo para se inscrever</p>
            <div className="signup-inputs-container">
              <InputMask mask="" placeholder="Nome" name="name" required />
              <InputMask
                mask="(99) 99999-9999"
                placeholder="Telefone"
                name="phone"
                required
              />
              <InputMask mask="" placeholder="Email" name="email" required />
              <InputMask mask="" placeholder="Cidade" name="city" required />
            </div>
            <div className="signup-radio-container">
              <span>Qual o perfil você se encaixa?</span>

              <label htmlFor="empreendedor">
                <input type="radio" name="profile" id="empreendedor" />
                <span className="checkmark" />
                Empreendedor
              </label>

              <label htmlFor="mentor">
                <input type="radio" name="profile" id="mentor" />
                <span className="checkmark" />
                Mentor
              </label>
            </div>
            <Link to="/cadastro-empreendedor">
              <ButtonNext>Próximo</ButtonNext>
            </Link>
          </div>
        </SignUpForm>
      </SignUpContainer>
    </div>
  );
};

export default SignUp;
