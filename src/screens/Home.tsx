import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { AppBar } from "../components/AppBar";

export function Home() {
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
