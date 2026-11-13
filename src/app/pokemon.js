import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import POKEMONS from "../data/pokemons";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function FichePokemon() {
  const { number } = useLocalSearchParams();
  const pokemon = POKEMONS.find((p) => p.number === Number(number));
  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: pokemon.name }} />
      <Image
        source={{ uri: ARTWORK + pokemon.number + ".png" }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{pokemon.number}</Text>
      <Text>{pokemon.name}</Text>
      <Text>{pokemon.type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
