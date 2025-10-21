import { ReactNode, useEffect } from 'react';
import { Theme, useTheme } from 'shared/lib';

export const ThemedContainer = ({
  children,
  globalTheme,
}: {
  children: ReactNode;
  globalTheme: Theme;
}) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (globalTheme !== theme) {
      toggleTheme();
    }
  }, [globalTheme, theme]);

  return <div className={`app ${theme}`}>{children}</div>;
};
