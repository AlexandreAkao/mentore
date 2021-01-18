type style = 'primary' | 'secondary' | 'tertiary' | 'white';

export interface IButtonProps {
  text: string;
  backgroundType?: style;
  textType?: style;
  customStyle?: Record<string, unknown>;
}
