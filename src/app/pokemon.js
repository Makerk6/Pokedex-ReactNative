import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const API = "https://pokeapi.co/api/v2/pokemon";

export default function FichePokemon() {
  const { number } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!number) return;
    async function fetchPokemon() {
      setPokemon(null);
      const response = await fetch(`${API}/${number}`);

      const data = await response.json();
      setPokemon({
        number: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        type: data.types[0].type.name,
      });
    }
    fetchPokemon();

    return () => {};
  }, [number]);

  if (!pokemon) {
    return (
      <View style={styles.screen}>
        <Text>Chargement...</Text>
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
      <Text>#{pokemon.number}</Text>
      <Text>{pokemon.name}</Text>
      <Text>Poids: {pokemon.weight / 10} kg</Text>
      <Text>Taille: {pokemon.height / 10} m</Text>
      <Text>Type: {pokemon.type}</Text>
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
