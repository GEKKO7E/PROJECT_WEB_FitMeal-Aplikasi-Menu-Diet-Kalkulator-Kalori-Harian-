import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="detail/[id]" options={{ title: "Detail Menu" }} />
    </Stack>
  );
}
