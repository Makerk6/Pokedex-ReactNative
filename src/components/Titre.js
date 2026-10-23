import { StyleSheet, Text } from "react-native";

export default function Titre() {
  return <Text style={styles.title}>Mon Pokédex</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
});