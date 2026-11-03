import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const TYPE_COLORS = {
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
};

export default function PokemonCard({ number, name, type, artwork }) {
  const typeColor = TYPE_COLORS[type] ?? "#718096";
  const [capture, setCapture] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: `${artwork}${number}.png` }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.number}>#{number}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={[styles.typeBadge, { backgroundColor: typeColor }]}>
          <Text style={styles.type}>{type}</Text>
        </View>
        <Pressable style={[styles.capture, capture && styles.nonCapture]} onPress={() => setCapture(!capture)}>
            <Text style={{ fontWeight: capture ? "700" : "300" }}>
              {capture ? "Capturé" : "Non capturé"}
            </Text>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#e4f5ff",
    borderRadius: 24,
    flexDirection: "row",
    marginBottom: 16,
    minHeight: 132,
    overflow: "hidden",
    padding: 14,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 18,
    height: 104,
    justifyContent: "center",
    width: 104,
  },
  image: {
    height: 102,
    width: 102,
  },
  details: {
    flex: 1,
    paddingLeft: 18,
  },
  number: {
    color: "#94a3b8",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
  },
  name: {
    color: "#172554",
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 10,
    marginTop: 2,
  },
  typeBadge: {
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  type: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "800",
  },
  capture:{
    alignSelf: "flex-start",
    marginTop: 5,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "#d7eceb"
  },
  nonCapture:{
    alignSelf: "flex-start",
    marginTop: 5,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor:"#3aa2f7"
  }
});
