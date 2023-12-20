import {Routes} from '@constants/route';
import Login from '@modules/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@rneui/themed';
import React from 'react';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {theme} = useTheme();
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.white,
          text: theme.colors.black,
          border: theme.colors.primary,
          notification: theme.colors.primary,
        },
        dark: theme.mode === 'dark',
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
