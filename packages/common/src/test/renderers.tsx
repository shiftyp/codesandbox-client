import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { render } from 'enzyme';

export function renderWithTheme(element: JSX.Element) {
  return render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);
}
