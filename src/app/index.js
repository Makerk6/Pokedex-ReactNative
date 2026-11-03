import { useState } from "react";
import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";
import PokeballCounter from "../components/PokeballCounter";
import POKEMONS from "../app/pokemons";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function Index() {
  const [feuSeulement, setFeuSeulement] = useState(false);
  const visibles = feuSeulement
    ? POKEMONS.filter((pokemon) => pokemon.type === "Feu")
    : POKEMONS;

  return (
    <View style={styles.screen}>
      <FlatList
        data={visibles}
        keyExtractor={(item) => String(item.number)}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={
          <View style={styles.header}>
            <Titre />
            <Text style={styles.count}>
              Nombre de Pokémon : {visibles.length}
            </Text>
            <PokeballCounter />
            <Pressable
              style={styles.filtreFeu}
              onPress={() => setFeuSeulement(!feuSeulement)}
            >
              <Text style={{ color: "white" }}>
                {feuSeulement
                  ? "Afficher tous les Pokémon"
                  : "Seulement les types Feu"}
              </Text>
            </Pressable>
          </View>
        }
        renderItem={({ item }) => (
          <PokemonCard
            number={item.number}
            name={item.name}
            type={item.type}
            artwork={ARTWORK}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#b6d2ff",
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  columnWrapper: {
    justifyContent: "center",
  },
  header: {
    marginBottom: 26,
  },
  count: {
    color: "#64748b",
    fontSize: 16,
    marginTop: 7,
    textAlign: "center",
  },
  filtreFeu: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#353535",
    borderRadius: 18,
    marginTop: 12,
    padding: 10,
  },
});
