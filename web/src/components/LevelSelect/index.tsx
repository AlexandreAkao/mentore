import { FC, useState } from 'react';

import { Container } from './styled';

const CardImage: FC = () => {
  const [option, setOption] = useState<number | undefined>(undefined);

  return (
    <Container option={option}>
      <span>Concordo</span>
      <div>
        <button
          className={`level-select-circle size-4 color-green ${
            option === 3 ? 'selected' : ''
          }`}
          type="button"
          onClick={() => setOption(3)}
          color="--tertiary"
        >
          &shy;
        </button>
        <button
          className={`level-select-circle size-3 color-green ${
            option === 2 ? 'selected' : ''
          }`}
          type="button"
          onClick={() => setOption(2)}
          color="--tertiary"
        >
          &shy;
        </button>
        <button
          className={`level-select-circle size-2 color-green ${
            option === 1 ? 'selected' : ''
          }`}
          type="button"
          onClick={() => setOption(1)}
          color="--tertiary"
        >
          &shy;
        </button>
        <button
          className={`level-select-circle size-1 color-gray ${
            option === 0 ? 'selected' : ''
          }`}
          type="button"
          onClick={() => setOption(0)}
          color="--gray"
        >
          &shy;
        </button>
        <button
          className={`level-select-circle size-2 color-blue ${
            option === -1 ? 'selected' : ''
          }`}
          type="button"
          onClick={() => setOption(-1)}
          color="--primary"
        >
          &shy;
        </button>
        <button
          className={`level-select-circle size-3 color-blue ${
            option === -2 ? 'selected' : ''
          }`}
          type="button"
          onClick={() => setOption(-2)}
          color="--primary"
        >
          &shy;
        </button>
        <button
          className={`level-select-circle size-4 color-blue ${
            option === -3 ? 'selected' : ''
          }`}
          type="button"
          onClick={() => setOption(-3)}
          color="--primary"
        >
          &shy;
        </button>
      </div>
      <span>Discordo</span>
    </Container>
  );
};

export default CardImage;
