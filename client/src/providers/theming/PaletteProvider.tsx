import React, { createContext, PropsWithChildren, useContext } from 'react';
export type Palette = 'light' | 'dark';
export interface PaletteProps {
  palette: Palette;
  setPalette: (palette: Palette) => void;
  togglePalette: () => void;
}
const DEFAULT_PROPS: PaletteProps = {
  palette: 'light',
  setPalette: () => {},
  togglePalette: () => {}
};
export const PaletteContext = createContext<PaletteProps>(DEFAULT_PROPS);

const PaletteProvider = ({ children }: PropsWithChildren<{}>) => {
  const [palette, setPalette] = React.useState<Palette>(DEFAULT_PROPS.palette);

  React.useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setPalette('dark');
    }

    const isDark = ({ matches }: MediaQueryListEvent) => {
      setPalette(matches ? 'dark' : 'light');
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', isDark);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', isDark);
    };
  }, []);

  const togglePalette = () =>
    setPalette((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <PaletteContext.Provider
      value={{ palette: palette, setPalette, togglePalette }}>
      {children}
    </PaletteContext.Provider>
  );
};

export default PaletteProvider;

export const usePalette = (): PaletteProps => useContext(PaletteContext);

export const usePaletteTheme = (): Palette => {
  const { palette } = usePalette();
  return palette;
};

export const usePaletteToggle = (): PaletteProps['togglePalette'] => {
  const { togglePalette } = usePalette();
  return togglePalette;
};
