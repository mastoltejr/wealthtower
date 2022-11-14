import AppRouter from './navigation/AppRouter';
import {
  CssBaseline,
  ThemeProvider,
  responsiveFontSizes,
  StyledEngineProvider
} from '@mui/material';
import { QueryClientProvider, QueryClient } from 'react-query';
import { lightTheme, darkTheme } from './providers/theming/appTheme';
import { usePaletteTheme } from './providers/theming/PaletteProvider';

function App() {
  const palette = usePaletteTheme();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        theme={responsiveFontSizes(
          palette === 'light' ? lightTheme : darkTheme
        )}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <AppRouter />
        </StyledEngineProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
