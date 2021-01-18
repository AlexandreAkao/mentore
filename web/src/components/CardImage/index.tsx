import { FC } from 'react';

import { ICardImageProps } from './types';

import { Container } from './styled';

const CardImage: FC<ICardImageProps> = ({ src, alt, ...rest }) => {
  return (
    <Container>
      <img src={src} alt={alt} {...rest} />
    </Container>
  );
};

export default CardImage;
