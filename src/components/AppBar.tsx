import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { Heading } from "./Heading";
import screens from "../screens.json";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export function AppBar() {
  return (
    <View style={styles.appBar}>
      <View>
        <Image
          style={styles.notepadImage}
          source={require("../../assets/notepad.png")}
        ></Image>
      </View>
      <View style={styles.viewHeader}>
        <Heading title="Jon's Notes" header="h1"></Heading>
      </View>
      <View style={styles.viewButton}>
        <Button title="Menu"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    padding: 10,
    flexDirection: "row",
    gap: 20,
    backgroundColor: "#111827",
  },
  notepadImage: {
    width: 50,
    height: 50,
  },
  fontTitle: {
    fontFamily: "sans-serif",
    color: "white",
  },
  viewHeader: {
    flex: 2,
  },
  viewButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
