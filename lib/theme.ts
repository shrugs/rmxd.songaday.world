import { extendTheme, ThemeOverride, useTheme as defaultUseTheme } from '@chakra-ui/react';
// import defaultTheme from '@chakra-ui/theme';

const override: ThemeOverride = {
  fonts: {
    // body: `'Titillium Web', ${defaultTheme.fonts.body}`,
    // heading: `'DR RAYMOND', ${defaultTheme.fonts.heading}`,
  },
  fontSizes: {},
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    main: '#2B2E6E',
    selectpurple: '#6D70C5',
  },
  styles: {
    global: {
      body: {
        fontFamily: 'body',
        color: 'black',
        bg: 'white',
        overflowX: 'hidden',
        lineHeight: 'normal',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxWidth: '4xl',
      },
    },
    Button: {
      variants: {
        rarible: {
          bgGradient: 'linear(to-br, #0C50FF, #5B9DFF, #FF74F1)',
          color: 'white',
          fontWeight: 'bold',
          _hover: { shadow: 'md', transform: 'scale(1.01)' },
        },
      },
    },
    Link: {
      variants: {
        underlined: {
          textDecoration: 'underline',
        },
      },
    },
  },
};

export const theme = extendTheme(override);
export const useTheme = () => defaultUseTheme<typeof theme>();
