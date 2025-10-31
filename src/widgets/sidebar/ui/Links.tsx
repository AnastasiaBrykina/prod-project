import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';
import cls from './Links.module.scss';
import { RoutePath } from 'shared/config';
import Home from 'shared/ui/assets/icons/Home.svg';
import AboutUs from 'shared/ui/assets/icons/AboutUs.svg';

interface LinksProps {
  collapsed: boolean;
}

export const Links = (props: LinksProps) => {
  const { collapsed } = props;

  const { t } = useTranslation('sidebar');

  return (
    <div className={classNames(cls.links)}>
      <AppLink
        to={RoutePath.main}
        className={classNames(cls.link, { [cls.justifyContent]: collapsed })}
      >
        <Home className={cls.icon} />
        <span className={classNames(cls.text, { [cls.collapsed]: collapsed })}>
          {t('main')}
        </span>
      </AppLink>
      <AppLink
        to={RoutePath.about}
        className={classNames(cls.link, { [cls.justifyContent]: collapsed })}
      >
        <AboutUs className={cls.icon} />
        <span className={classNames(cls.text, { [cls.collapsed]: collapsed })}>
          {t('about')}
        </span>
      </AppLink>
    </div>
  );
};
