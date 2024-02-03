import {shorthands} from '@tamagui/shorthands';
import {color, radius, size, space, zIndex} from '@tamagui/themes';
import {Colors} from 'src/constants/colors';
import {createFont, createTamagui, createTokens} from 'tamagui';

const sansFont = createFont({
  family: 'OpenSans-Regular',
  size,
  face: {
    100: {normal: 'OpenSans-Light', italic: 'OpenSans-LightItalic'},
    200: {normal: 'OpenSans-Light', italic: 'OpenSans-LightItalic'},
    300: {normal: 'OpenSans-Light', italic: 'OpenSans-LightItalic'},
    400: {normal: 'OpenSans-Regular', italic: 'OpenSans-Italic'},
    500: {normal: 'OpenSans-Medium', italic: 'OpenSans-MediumItalic'},
    600: {normal: 'OpenSans-SemiBold', italic: 'OpenSans-SemiBoldItalic'},
    700: {normal: 'OpenSans-SemiBold', italic: 'OpenSans-SemiBoldItalic'},
    800: {normal: 'OpenSans-Bold', italic: 'OpenSans-BoldItalic'},
    900: {normal: 'OpenSans-Bold', italic: 'OpenSans-BoldItalic'},
  },
});

export const tokens = createTokens({
  size,
  space,
  radius,
  zIndex,
  color: {...color, primary: Colors.PRIMARY},
});

const config = createTamagui({
  fonts: {body: sansFont, heading: sansFont},
  tokens,
  themes: {
    light: {
      bg: Colors.WHITE,
      color: Colors.BLACK,
    },
    dark: {
      bg: Colors.BLACK,
      color: Colors.BLACK,
    },
  },
  shorthands,
});

type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
