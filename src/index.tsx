import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App, ThemeProvider } from 'app/ui';
import 'shared/config/i18n';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
);
