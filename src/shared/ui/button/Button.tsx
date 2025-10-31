import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

export enum SizeButton {
  M = 'medium',
  L = 'large',
  S = 'small',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  size?: SizeButton;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    className,
    theme = ThemeButton.PRIMARY,
    size = SizeButton.M,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
