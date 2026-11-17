import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

export default function FichePokemon() {
  const { number } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`${API}/${number}`);
      const data = await response.json();
      setPokemon({
        number: data.id,
        name: data.name,
      });
    }
    fetchPokemon();
  }, [number]);

  if (!pokemon) {
    return (
      <View style={styles.screen}>
        <Text>Pokémon non trouvé</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: pokemon.name }} />
      <Image
        source={{ uri: ARTWORK + pokemon.number + ".png" }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{pokemon.name}</Text>
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
