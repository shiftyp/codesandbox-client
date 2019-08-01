import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { RenderFunction } from '@storybook/react';

export const ThemeDecorator = (fn: RenderFunction) => (
  <ThemeProvider theme={theme}>{fn() as JSX.Element}</ThemeProvider>
);
