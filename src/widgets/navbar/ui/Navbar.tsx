import { SwitchThemeButton } from 'features/switchTheme';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to={'/'} className={classNames(cls.link)}>
          Главная
        </AppLink>
        <AppLink to={'/about'}>О Нас</AppLink>
      </div>
    </div>
  );
};
