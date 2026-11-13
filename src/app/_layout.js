import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Pokédex" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
}
