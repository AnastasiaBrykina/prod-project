import { classNames, useTheme, Theme } from 'shared/lib';
import Light from 'shared/ui/assets/icons/Light.svg';
import Dark from 'shared/ui/assets/icons/Dark.svg';
import { Button, ThemeButton } from 'shared/ui';

interface SwitchThemeButtonProps {
  className?: string;
}

export const SwitchThemeButton = (props: SwitchThemeButtonProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <Light /> : <Dark />}
    </Button>
  );
};
