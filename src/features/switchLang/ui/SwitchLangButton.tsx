import { classNames } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui';
import i18n from 'shared/config/i18n';
import { useTranslation } from 'react-i18next';

export interface SwitchLangButtonProps {
  className?: string;
}

export const SwitchLangButton = (props: SwitchLangButtonProps) => {
  const { className } = props;
  const { t } = useTranslation('');

  const onChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={onChangeLang}
    >
      {t('lang')}
    </Button>
  );
};
