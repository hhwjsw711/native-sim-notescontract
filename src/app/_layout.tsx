import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import ConvexClientProvider from "../../ConvexClientProvider";

export default function RootLayout() {
  return (
    <ConvexClientProvider>
      <View style={{ flex: 1 }}>
        <View style={{ height: 50, backgroundColor: "#0D87E1" }}>
          <StatusBar translucent backgroundColor="#0D87E1" barStyle="light-content" />
        </View>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </ConvexClientProvider>
  );
}
