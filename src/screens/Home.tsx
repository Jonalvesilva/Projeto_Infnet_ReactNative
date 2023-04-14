import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image } from "react-native";
import { AppBar } from "../components/AppBar";
import { useState, useEffect } from "react";
import type { ParamListBase } from "@react-navigation/native";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import MapView, { PROVIDER_GOOGLE, MapMarker } from "react-native-maps";
import screens from "../screens.json";
import styled from "styled-components/native";
import type { Notepad } from "../types";
import { api } from "../api";
import * as Location from "expo-location";
import Toast from "react-native-root-toast";

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`;

type Coords = {
  latitude: number | null;
  longitude: number | null;
};

const initialRegion = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

const initialNotepads: Notepad[] = [];

const notepadIcon = require("../../assets/notepad.png");

function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export function Home({ navigation, route }: DrawerScreenProps<any>) {
  const [notepads, setNotepads] = useState(initialNotepads);
  const [region, setRegion] = useState(initialRegion);
  const coords = route.params?.coords;

  useEffect(() => {
    Location.requestForegroundPermissionsAsync().then(async (res) => {
      if (res.status === "granted") {
        await delay(2);
        const position = await Location.getCurrentPositionAsync();
        setRegion({ ...region, ...position.coords });
        Toast.show("Permissão concedida");
      } else {
        Toast.show("Este App precisa de permissão de acesso a Geolocalização!");
      }
    });

    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get<Notepad[]>("/notepads");
      setNotepads(data);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (
      coords !== undefined &&
      coords.latitude !== null &&
      coords.longitude !== null
    ) {
      setRegion({ ...region, ...coords });
    }
  }, [coords]);

  return (
    <Container>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        region={region}
        onLongPress={(event) => {
          const coords = event.nativeEvent.coordinate;
          navigation.navigate(screens.notepadCreate, { coords });
        }}
      >
        {notepads
          .filter(
            ({ latitude, longitude }) => latitude !== null && longitude !== null
          )
          .map(({ latitude, longitude, id }) => (
            <MapMarker
              key={id}
              coordinate={{ latitude, longitude }}
              onPress={() => {
                navigation.navigate(screens.notepadView, { id });
              }}
            >
              <Image
                source={notepadIcon}
                resizeMode="contain"
                style={styles.mapIcon}
              ></Image>
            </MapMarker>
          ))}
      </MapView>
    </Container>
  );
}

const styles = StyleSheet.create({
  map: { width: "100%", height: "100%" },
  mapIcon: { width: 32, height: 32 },
});
