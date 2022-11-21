import { Theme, useTheme } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode, useMemo, useState } from "react";

import { createContext } from "react";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  toggleColorDarkMode: () => {},
  theme: {}
});

export interface ColorModeProps {
  children: ReactNode;
}

const TypeOfDays = {
  cloudyDay: {
    light: '#6df9e5',
    dark: '#232535',
    text: {
      light: {
        primary: '##122d4f',
        secondary: '#405C63',
      },
      dark: {
        primary: '#DAE0E1',
        secondary: '#405C63',
      }
    }
  },
 sunnyDay: {
    light: 'linear-gradient(180deg, rgba(249,225,119,1) 0%, rgba(255,190,148,1) 80%)',
    dark: '#232535',
    text: {
      light: {
        primary: '##1d3055',
        secondary: '#26ADA0',
      },
      dark: {
        primary: '#f8f9ff',
        secondary: '#5d606f',
      }
    }
  },
}


type Props = typeof TypeOfDays[keyof typeof TypeOfDays];

export function ColorModProvider({children}: ColorModeProps){
  const [mode, setMode] = useState<Props>(TypeOfDays['cloudyDay']);
  const [darkMode, setDarkMode] = useState< 'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorDarkMode: () => {
        setDarkMode((prevMode: any) =>
          prevMode === 'light'
          ? 'dark' 
          : 'light',
        );
      },
      toggleColorMode: () => {
        setMode((prevMode: any) =>
          prevMode === TypeOfDays['cloudyDay'] 
          ? TypeOfDays['sunnyDay'] 
          : TypeOfDays['cloudyDay'],
        );
      }
    }),
    [],
  );

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: mode[darkMode]
          },
          text: {
            primary: mode.text[darkMode].primary,
            secondary: mode.text[darkMode].secondary
          }
        },
        typography: {
          fontFamily: "'Poppins', sans-serif",
        },
      }),
    [darkMode, mode],
  );  

  return (
    <ColorModeContext.Provider value={{...colorMode, theme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorModeContext