import { classNames } from 'shared/lib';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { AppRoutes, RoutePath } from 'shared/config';

interface PageLoaderProps {
  className?: string;
}

export const PageError = (props: PageLoaderProps) => {
  const { className } = props;

  const { t } = useTranslation('pageError');

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p className={cls.textError}>{t('anyError')}</p>
      <Button onClick={() => location.replace(RoutePath[AppRoutes.MAIN])}>
        {t('toMainPage')}
      </Button>
    </div>
  );
};
