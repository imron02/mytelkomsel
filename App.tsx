import {Colors} from '@constants/colors';
import {ThemeProvider, createTheme} from '@rneui/themed';
import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src';

const theme = createTheme({
  lightColors: {
    primary: Colors.PRIMARY,
  },
  darkColors: {
    primary: Colors.PRIMARY,
  },
  mode: 'light',
});

const App = () => {
  theme.mode = useColorScheme() || 'light';

  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
