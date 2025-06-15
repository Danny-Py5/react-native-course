import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "tab", headerShown: false }}
      />

      <Stack.Screen
        name="movie/[id]"
        options={{ title: "Movie Details", headerShown: true }}
      />
    </Stack>
  );
}
