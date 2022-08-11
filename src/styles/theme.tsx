import { createTheme } from '@nextui-org/react';

export const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      blue200: '#BBC1FF',
      blue300: '#838EFF',
      blue400: '#606CE2',
      blue500: '#3E48B0',
      blue600: '#1C2572',
      blue700: '#050B3F',

      primaryLight: '$blue200',
      primaryLightHover: '$blue300',
      primaryLightActive: '$primary',
      primaryLightContrast: '$blue600',
      primary: '$blue400',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white',
      primaryShadow: '$blue500',

      brown200: '#DD9900',
      brown300: '#B68005',
      brown400: '#8F670B',
      brown500: '#694D10',
      brown600: '#423416',
      brown700: '#1B1B1B',

      secondaryLight: '$brown200',
      secondaryLightHover: '$brown300',
      secondaryLightActive: '$secondary',
      secondaryLightContrast: '$brown600',
      secondary: '$brown400',
      secondaryBorder: '$brown500',
      secondaryBorderHover: '$brown600',
      secondarySolidHover: '$brown700',
      secondarySolidContrast: '$white',
      secondaryShadow: '$brown500',
    },

    space: {},
    fonts: {},
  },
});
