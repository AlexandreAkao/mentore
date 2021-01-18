import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FloatingButtonBot from './components/FloatingButtonBot';
import EntrepreneurPage from './pages/EntrepreneurPage';

import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/cadastro" component={SignUp} />
        <Route path="/cadastro-empreendedor" component={EntrepreneurPage} />
      </Switch>
      <FloatingButtonBot />
    </BrowserRouter>
  );
};

export default Routes;
