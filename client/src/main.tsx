import PaletteProvider from './providers/theming/PaletteProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DateFnsUtils from '@date-io/date-fns';

import { LocalizationProvider } from '@mui/x-date-pickers';
import './index.css';
import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <PaletteProvider>
        <App />
      </PaletteProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
