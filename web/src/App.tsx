import { FC } from 'react';
import Routes from './routes';

import { GlobalStyles } from './styles/global';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
