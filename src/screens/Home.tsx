import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { AppBar } from "../components/AppBar";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";

export function Home({ navigation }: NativeStackScreenProps<ParamListBase>) {
  return (
    <View style={styles.viewHome}>
      <AppBar></AppBar>
    </View>
  );
}

const styles = StyleSheet.create({
  viewHome: {
    marginTop: 29,
  },
});
