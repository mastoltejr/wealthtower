import { createTheme, ThemeOptions } from '@mui/material/styles';
// import '@mui/lab/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';

const createOpsTheme = (options: ThemeOptions) =>
  createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'success' },
            style: {
              color: chartPalette.chartSuccess.main,
              borderRadius: 4,
              border: `1px solid ${chartPalette.chartSuccess.main}`
            }
          },
          {
            props: { variant: 'error' },
            style: {
              color: chartPalette.chartError.main,
              borderRadius: 4,
              border: `1px solid ${chartPalette.chartError.main}`
            }
          },
          {
            props: { variant: 'warning' },
            style: {
              color: chartPalette.chartWarning.main,
              borderRadius: 4,
              border: `1px solid ${chartPalette.chartWarning.main}`
            }
          },
          {
            props: { variant: 'info' },
            style: {
              color: chartPalette.chartInfo.main,
              borderRadius: 4,
              border: `1px solid ${chartPalette.chartInfo.main}`
            }
          }
        ]
      }
    },
    statusColors: {
      success: {
        color: chartPalette.chartSuccess.main
      },
      warning: {
        color: chartPalette.chartWarning.main
      },
      error: {
        color: chartPalette.chartError.main
      },
      info: {
        color: chartPalette.chartInfo.main
      }
    },
    ...options
  });

const baseTheme = {
  typography: {
    fontFamily: '"Poppins","Arial", sans-serif'
  }
};

export const chartPalette = {
  chartOrange: {
    main: '#F68D2E',
    contrastText: '#FFF'
  },
  chartCharcoal: {
    main: '#54585A',
    contrastText: '#FFF'
  },
  chartLightGray: {
    main: '#A0A0A0',
    contrastText: '#FFF'
  },
  chartPurple: {
    main: '#7C4D99',
    dark: '#60308C',
    light: '#C8B7D5',
    contrastText: '#FFF'
  },
  chartBlue: {
    main: '#0075BC',
    dark: '#005797',
    light: '#B3C9E9',
    contrastText: '#FFF'
  },
  chartTeal: {
    main: '#0292AD',
    dark: '#006B73',
    light: '#b9e1e9', // '#b9e1e9'
    contrastText: '#FFF'
  },
  chartGreen: {
    main: '#23AA80',
    dark: '#00896F',
    light: '#ABDAC5',
    contrastText: '#FFF'
  },
  chartYellow: {
    main: '#E2CC1F',
    dark: '#B7A32B',
    light: '#F2E390',
    contrastText: '#FFF'
  },
  chartError: {
    light: '#e57373',
    main: '#f44336',
    dark: '#ce0909',
    contrastText: '#fff'
  },
  chartWarning: {
    light: '#ffb74d',
    main: '#ff9800',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  chartInfo: {
    light: '#64b5f6',
    main: '#2196f3',
    dark: '#1976d2',
    contrastText: '#fff'
  },
  chartSuccess: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  }
};

export const chartColors: string[] = [
  chartPalette.chartBlue.main,
  chartPalette.chartGreen.main,
  chartPalette.chartOrange.main,
  chartPalette.chartTeal.main,
  chartPalette.chartYellow.main,
  chartPalette.chartPurple.main,
  chartPalette.chartBlue.dark,
  chartPalette.chartTeal.light,
  chartPalette.chartGreen.dark,
  chartPalette.chartBlue.light,
  chartPalette.chartYellow.dark,
  chartPalette.chartPurple.light,
  chartPalette.chartPurple.dark,
  chartPalette.chartGreen.light,
  chartPalette.chartYellow.light
];

export const lightTheme = createOpsTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    divider: 'rgba(0, 0, 0, 0.12)',
    primary: chartPalette.chartPurple,
    secondary: chartPalette.chartCharcoal,
    text: {
      primary: '#585858'
    },
    error: chartPalette.chartError,
    background: {
      default: '#FCFCFC',
      paper: '#FFF'
    },
    ...chartPalette
  }
});

export const darkTheme = createOpsTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    divider: 'rgba(255, 255, 255, 0.12)',
    primary: chartPalette.chartTeal,
    secondary: { main: 'rgba(255, 255, 255, 0.7)', contrastText: '#000' },
    background: {
      default: 'rgb(26, 32, 39)',
      paper: 'rgba(255, 255, 255, 0.05)'
    },
    ...chartPalette
  }
});
