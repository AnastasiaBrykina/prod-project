import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared';

const defaultTheme: Theme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultPropsProvider = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultPropsProvider}>
      {children}
    </ThemeContext.Provider>
  );
};
