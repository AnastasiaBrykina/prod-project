import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import cls from './ToggleButton.module.scss';

interface ToggleButtonProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const { collapsed, onToggle } = props;

  return (
    <Button
      className={classNames(cls.toggle, {}, [])}
      data-testid="sidebar-toggle"
      onClick={onToggle}
    >
      {collapsed ? '>' : '<'}
    </Button>
  );
};
