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
import type { DrawerScreenProps } from "@react-navigation/drawer";

export function AppBar() {
  return (
    <View style={styles.appBar}>
      <Heading title="Jon's Notes" header="h1"></Heading>
      <View>
        <Image
          style={styles.notepadImage}
          source={require("../../assets/notepad.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    padding: 10,
    flexDirection: "row",
    gap: 45,
    backgroundColor: "#111827",
    color: "white",
  },
  notepadImage: {
    width: 45,
    height: 45,
    marginRight: 20,
  },
  fontTitle: {
    fontFamily: "sans-serif",
    color: "white",
  },
  viewHeader: {
    flex: 2,
  },
});
