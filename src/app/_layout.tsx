import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Disembunyikan karena kita sudah membuat header sendiri yang bagus di index.tsx
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}