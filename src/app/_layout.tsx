import { FontDisplay, useFonts } from "expo-font";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthProvider, useAuth } from "../context/AuthContext";

SplashScreen.preventAutoHideAsync();

function RouteGuardLayout() {
  const { session, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; // Jangan redirect saat masih memuat status sesi

    // Cek apakah user sedang berada di halaman login/auth (baik di web maupun mobile)
    const inAuthGroup = segments.some(
      (segment) => segment === "(auth)" || segment === "login"
    );

    // 1. Belum login tapi mencoba membuka halaman aplikasi utama
    if (!session && !inAuthGroup) {
      router.replace("/(auth)/login");
    }
    // 2. Sudah login tapi masih di halaman login/register
    else if (session && inAuthGroup) {
      router.replace("/");
    }
  }, [session, segments, isLoading]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#121212",
        }}
      >
        <ActivityIndicator size="large" color="#FF5722" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)/login" options={{ title: "Login" }} />
      <Stack.Screen name="index" options={{ title: "Beranda" }} />
      <Stack.Screen name="favorites" options={{ title: "Menu Favorit" }} />
      <Stack.Screen name="catalog" options={{ title: "Katalog Makanan" }} />
      <Stack.Screen name="detail/[id]" options={{ title: "Detail Menu" }} />
    </Stack>
  );
}

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
    <AuthProvider>
      <RouteGuardLayout />
    </AuthProvider>
  );
}
