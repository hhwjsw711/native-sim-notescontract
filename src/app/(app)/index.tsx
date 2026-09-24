import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates";

export default function Home() {
  const [updateInfo, setUpdateInfo] = useState("checking...");

  useEffect(() => {
    (async () => {
      try {
        const check = await Updates.checkForUpdateAsync();
        if (check.isAvailable) {
          setUpdateInfo("Update available! Downloading...");
          const fetchResult = await Updates.fetchUpdateAsync();
          if (fetchResult.isNew) {
            setUpdateInfo("Update downloaded. Will apply on restart.");
          }
        } else {
          setUpdateInfo("No update available (up to date)");
        }
      } catch (e) {
        setUpdateInfo(`OTA check: ${String(e).substring(0, 100)}`);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTA Test App v1</Text>
      <Text style={styles.info}>{updateInfo}</Text>
      <Text style={styles.small}>runtime: {Updates.runtimeVersion}</Text>
      <Text style={styles.small}>channel: {Updates.channel ?? "none"}</Text>
      <Text style={styles.small}>updateId: {Updates.updateId ?? "embedded"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F7FE" },
  title: { fontSize: 28, fontWeight: "bold", color: "#0D87E1", marginBottom: 20 },
  info: { fontSize: 16, color: "#333", textAlign: "center", marginBottom: 10, paddingHorizontal: 20 },
  small: { fontSize: 12, color: "#888", marginTop: 4 },
});
