import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import PokeballCounter from "../components/PokeballCounter";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";
import POKEMONS from "../data/pokemons";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function Index() {
  const router = useRouter();
  const [capturedTab, setCapturedTab] = useState([]);
  var capturedNb = capturedTab.length;
  // const [feuSeulement, setFeuSeulement] = useState(false);
  // const visibles = feuSeulement
  //   ? POKEMONS.filter((pokemon) => pokemon.type === "Feu")
  //   : POKEMONS;
  const [captureSeulement, setCaptureSeulement] = useState(false);
  const visibles = captureSeulement
    ? POKEMONS.filter((pokemon) => capturedTab.includes(pokemon.number))
    : POKEMONS;

  function capturer(id) {
    if (capturedTab.includes(id)) {
      setCapturedTab(capturedTab.filter((l) => l !== id));
    } else {
      setCapturedTab([...capturedTab, id]);
    }
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={visibles}
        keyExtractor={(item) => String(item.number)}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        extraData={capturedTab}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={
          <View style={styles.header}>
            <Titre />
            <Text style={styles.count}>
              Nombre de Pokémon : {visibles.length}
            </Text>
            <PokeballCounter />
            <Text style={styles.count}>Nombre de capture : {capturedNb}</Text>
            <Pressable
              style={styles.filtreFeu}
              onPress={() => setCaptureSeulement(!captureSeulement)}
            >
              <Text style={{ color: "white" }}>
                {captureSeulement
                  ? "Afficher tous les Pokémon"
                  : "Seulement les Pokémon capturés"}
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
            capture={capturedTab.includes(item.number)}
            onCapture={() => capturer(item.number)}
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
