import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation('navbar');

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to={'/'} className={classNames(cls.link)}>
          {t('main')}
        </AppLink>
        <AppLink to={'/about'}>{t('about')}</AppLink>
      </div>
    </div>
  );
};
