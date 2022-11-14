import { PaletteColor } from '@mui/material/styles/createPalette';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    success: true;
    error: true;
    warning: true;
    info: true;
  }
}
declare module '@mui/material/styles/createTheme' {
  interface Theme {
    statusColors: {
      success: {
        color: string;
      };
      warning: {
        color: string;
      };
      error: {
        color: string;
      };
      info: {
        color: string;
      };
    };
  }

  interface ThemeOptions {
    statusColors?: {
      success?: {
        color?: string;
      };
      warning?: {
        color?: string;
      };
      error?: {
        color?: string;
      };
      info?: {
        color?: string;
      };
    };
  }
}
