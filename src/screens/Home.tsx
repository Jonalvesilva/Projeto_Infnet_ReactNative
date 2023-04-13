import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { AppBar } from "../components/AppBar";
import type { ParamListBase } from "@react-navigation/native";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import screens from "../screens.json";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`;

export function Home({ navigation }: DrawerScreenProps<ParamListBase>) {
  return (
    <Container>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
    </Container>
  );
}

const styles = StyleSheet.create({ map: { width: "100%", height: "100%" } });
