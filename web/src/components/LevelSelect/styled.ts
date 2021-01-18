import styled from 'styled-components';

const mapCricle: Record<string, unknown> = {
  '3': '--tertiary',
  '2': '--tertiary',
  '1': '--tertiary',
  '0': '--gray',
  '-1': '--primary',
  '-2': '--primary',
  '-3': '--primary',
};

export const Container = styled.div<{ option: number | undefined }>`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 30px;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }

  span:first-child {
    color: var(--tertiary);
  }

  span:last-child {
    color: var(--primary);
  }

  button {
    background-color: transparent;
    border: 0;
  }

  .level-select-circle {
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    margin: 0 22px;
    user-select: none;
  }

  .selected {
    transition: 0.2s ease-in all;
    background-color: ${props => `var(${mapCricle[props.option ?? 1]})`};
  }

  .size-1 {
    width: 37px;
    height: 37px;
  }

  .size-2 {
    width: 43px;
    height: 43px;
  }

  .size-3 {
    width: 55px;
    height: 55px;
  }

  .size-4 {
    width: 67px;
    height: 67px;
  }

  .color-green {
    border-color: var(--tertiary);
  }

  .color-blue {
    border-color: var(--primary);
  }

  .color-gray {
    border-color: var(--gray);
  }
`;
