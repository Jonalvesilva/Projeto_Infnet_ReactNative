import React from "react";
import { Text, StyleSheet } from "react-native";

type HeadingProps = {
  title: string;
  header: string;
};

const styles = StyleSheet.create({
  h1: { fontSize: 40, color: "white" },
  h2: { fontSize: 38, color: "white" },
  h3: { fontSize: 36, color: "white" },
  h4: { fontSize: 34, color: "white" },
  h5: { fontSize: 32, color: "white" },
  h6: { fontSize: 30, color: "white" },
});

export function Heading({ title, header }: HeadingProps) {
  const hd = Object.keys(styles).includes(header) ? header : "";
  return <Text style={styles[hd]}>{title}</Text>;
}
