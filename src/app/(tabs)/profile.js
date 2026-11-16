import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.screen}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
