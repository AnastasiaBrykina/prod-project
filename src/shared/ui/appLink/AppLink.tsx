import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import csl from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(csl.appLink, {}, [className, csl[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
