import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { AppBar } from "../components/AppBar";
import type { ParamListBase } from "@react-navigation/native";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import screens from "../screens.json";

export function Home({ navigation }: DrawerScreenProps<ParamListBase>) {
  return <View style={styles.viewHome}></View>;
}

const styles = StyleSheet.create({
  viewHome: {
    marginTop: 29,
  },
});
