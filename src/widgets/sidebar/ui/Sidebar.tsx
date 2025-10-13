import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { SwitchThemeButton } from 'features/switchTheme';
import { SwitchLangButton } from 'features/switchLang';
import { useTranslation } from 'react-i18next';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;

  const { t } = useTranslation('sidebar');

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>{t('toggle')}</button>
      <div className={cls.switchers}>
        <SwitchThemeButton />
        <SwitchLangButton />
      </div>
    </div>
  );
};
