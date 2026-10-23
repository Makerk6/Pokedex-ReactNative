import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PokeballCounter() {
  const [count, setBalls] = useState(0);
  return (
    <View>
      <View>
        <Text>Sac de Pokéballs: {count}</Text>
      </View>
      <View>
        <Pressable onPress={() => setBalls(count + 1)}>
          <Text>+</Text>
        </Pressable>
        <Pressable onPress={() => setBalls(count - 1)}>
          <Text>-</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => setBalls(0)}>
          <Text>Videz le sac</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
