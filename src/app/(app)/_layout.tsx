import { Stack } from "expo-router";

// OTA test app: no auth gate
export default function AppLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
