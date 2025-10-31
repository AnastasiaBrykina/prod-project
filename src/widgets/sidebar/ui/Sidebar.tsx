import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { SwitchThemeButton } from 'features/switchTheme';
import { SwitchLangButton } from 'features/switchLang';
import { ToggleButton } from './ToggleButton';
import { Links } from './Links';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <ToggleButton collapsed={collapsed} onToggle={onToggle} />
      <Links collapsed={collapsed} />
      <div className={cls.switchers}>
        <SwitchThemeButton />
        <SwitchLangButton />
      </div>
    </div>
  );
};
