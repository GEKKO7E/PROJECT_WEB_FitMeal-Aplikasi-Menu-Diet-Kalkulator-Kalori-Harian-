import { FontDisplay, useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Tahan splash screen sampai font selesai dimuat
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto: {
      uri: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2",
      display: FontDisplay.SWAP,
    },
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false, // Disembunyikan agar header kustom di setiap screen tidak bentrok
      }}
    >
      <Stack.Screen name="index" options={{ title: "Beranda" }} />
      <Stack.Screen name="favorites" options={{ title: "Menu Favorit" }} />
      <Stack.Screen name="catalog" options={{ title: "Katalog Makanan" }} />
      <Stack.Screen name="detail/[id]" options={{ title: "Detail Menu" }} />
    </Stack>
  );
}
