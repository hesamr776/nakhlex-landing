import { createTheme } from '@nextui-org/react';

export const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      blue200: '#BBC1FF',
      blue300: '#838EFF',
      blue400: '#F56300',
      blue500: '#3E48B0',
      blue600: '#1C2572',
      blue700: '#015D8B',

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

      brown200: '#F9F7FA',
      brown300: '#F3F0F7',
      brown400: '#726B7B',
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
