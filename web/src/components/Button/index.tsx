import { FC } from 'react';

import { IButtonProps } from './types';

import { Button } from './styled';

const LandingPage: FC<IButtonProps> = ({
  text,
  customStyle = {},
  backgroundType = 'primary',
  textType = 'white',
}) => {
  return (
    <Button
      backgroundType={backgroundType}
      textType={textType}
      style={customStyle}
      type="button"
    >
      {text}
    </Button>
  );
};

export default LandingPage;
