import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Disembunyikan karena kita membuat header kustom sendiri
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="detail/[id]" />
    </Stack>
  );
}
