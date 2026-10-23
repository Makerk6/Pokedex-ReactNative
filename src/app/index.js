import { ScrollView, StyleSheet, Text, View } from "react-native";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";
import PokeballCounter from "../components/PokeballCounter";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
].map((pokemon) => ({
  ...pokemon,
  image: `${ARTWORK}${pokemon.number}.png`,
}));

export default function Index() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.listContent}>
        <View style={styles.header}>
          <Titre />
          <Text style={styles.count}>
            Nombre de Pokémon : {POKEMONS.length}
          </Text>
          <PokeballCounter/>
        </View>
        {POKEMONS.map((pokemon) => (
          <PokemonCard key={pokemon.number} {...pokemon} />
        ))}
      </ScrollView>
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
  header: {
    marginBottom: 26,
  },
  count: {
    color: "#64748b",
    fontSize: 16,
    marginTop: 7,
    textAlign: "center",
  },
});
