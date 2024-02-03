import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createTamagui, TamaguiProvider} from 'tamagui';
import Navigation from './src';
import config from './tamagui.config';

const tamaguiConfig = createTamagui(config);

const App = () => {
  const colorScheme = useColorScheme() || 'light';

  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
        <Navigation />
      </TamaguiProvider>
    </SafeAreaProvider>
  );
};

export default App;
