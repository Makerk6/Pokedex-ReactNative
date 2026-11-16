import { Image, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.screen}>
      <Text>Profile</Text>
      <Text>Nom : Romain DOUTARD--GUERINI</Text>
      <Text>Pokémon Préférés : Mystherbe</Text>
      <Image
        source={{
          uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
        }}
        style={{ width: 200, height: 200 }}
      />
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
