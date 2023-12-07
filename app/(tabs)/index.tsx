import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, StyleProp, ViewStyle, TextInput } from "react-native";
import { rainbow } from "rainbow-colors-array-ts";

export default function Home() {
  return (
    <View style={styles.container}>
      <Button title="Go to rainbow list"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
