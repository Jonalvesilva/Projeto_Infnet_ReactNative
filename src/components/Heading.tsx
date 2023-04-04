import React from "react";
import { Text, StyleSheet } from "react-native";

type HeadingProps = {
  title: string;
  header: string;
};

const styles = StyleSheet.create({
  h1: { fontSize: 24 },
  h2: { fontSize: 22 },
  h3: { fontSize: 20 },
  h4: { fontSize: 18 },
  h5: { fontSize: 16 },
  h6: { fontSize: 14 },
});

export function Heading({ title, header }: HeadingProps) {
  const hd = Object.keys(styles).includes(header) ? header : "";
  return <Text style={styles[hd]}>{title}</Text>;
}
