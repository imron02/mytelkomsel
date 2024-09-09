import tamaguiConfig from "@/tamagui.config";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontLoaded] = useFonts({
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("../assets/fonts/OpenSans-Bold.ttf"),
    SFPro: require("../assets/fonts/SF-Pro.ttf"),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(welcome)" />
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
