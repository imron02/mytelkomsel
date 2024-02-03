import {Routes} from '@constants/route';
import Login from '@modules/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import {useTheme} from 'tamagui';
import {Colors} from './constants/colors';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const colorScheme = useColorScheme() || 'light';
  const theme = useTheme();
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: Colors.PRIMARY,
          background: theme.bg.val,
          card: Colors.WHITE,
          text: theme.color.val,
          border: Colors.PRIMARY,
          notification: Colors.PRIMARY,
        },
        dark: colorScheme === 'dark',
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.LOGIN}
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
