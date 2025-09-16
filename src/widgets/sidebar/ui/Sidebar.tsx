import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { SwitchThemeButton } from 'features/switchTheme';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <SwitchThemeButton />
      </div>
    </div>
  );
};
