import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PokeballCounter() {
  const [count, setBalls] = useState(0);
  return (
    <View>
      <View>
        <Text style={styles.nbPkBall}>Pokéballs: {count}</Text>
      </View>
      <View style={styles.plusMoins}>
        <View style={styles.bouton}>
          <Pressable onPress={() => setBalls(count - 1)}>
            <Text style={{ fontSize: 30 }}>-</Text>
          </Pressable>
        </View>
        <View style={styles.bouton}>
          <Pressable onPress={() => setBalls(count + 1)}>
            <Text style={{ fontSize: 30 }}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.reset}>
        <Pressable onPress={() => setBalls(0)}>
          <Text>Videz le sac</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nbPkBall: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 20,
    marginTop: 30,
  },
  plusMoins: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  bouton: {
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 15,
    height: 40,
    width: 40,
    justifyContent: "center",
  },
  reset: {
    alignItems: "center",
    marginTop: 12,
  },
});
