import { extendTheme } from '@chakra-ui/react';

const  ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ ...ThemeConfig });

export default theme;