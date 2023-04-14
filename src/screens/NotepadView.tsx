import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Notepad } from "../types";
import screens from "../screens.json";
import { api } from "../api";
import styled from "styled-components/native";
import Toast from "react-native-root-toast";

const initialNotepad: Notepad = {
  id: 0,
  title: "",
  subtitle: "",
  created_at: "",
  content: "",
  latitude: null,
  longitude: null,
};

const IdText = styled.Text`
  color: #57606f;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 5px;
  margin-top: 60px;
`;

const ContainerView = styled.View`
  padding: 14px;
  flex: 1;
`;

const DataText = styled.Text`
  color: #57606f;
  font-size: 18px;
  padding-bottom: 15px;
`;

const Coords = styled.Text`
  color: #57606f;
  font-size: 18px;
  padding-bottom: 5px;
`;

const TitleText = styled.Text`
  color: darkblue;
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const SubTitleText = styled.Text`
  color: darkblue;
  font-size: 20px;
  padding-bottom: 20px;
`;

const ContentText = styled.Text`
  font-size: 18px;
  text-align: justify;
  margin-bottom: 15px;
`;

const EditButton = styled.TouchableOpacity`
  background-color: green;
  width: 120px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const DeleteButton = styled.TouchableOpacity`
  background-color: red;
  width: 120px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const MapButton = styled.TouchableOpacity`
  background-color: #0079a1;
  width: 280px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export function NotepadView({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const [notepad, setNotepad] = useState(initialNotepad);
  const id = route.params.id;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get<Notepad>(`/notepads/${id}`);
      setNotepad(data);
    });

    return unsubscribe;
  }, [id]);

  return (
    <ContainerView>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/notepad.webp")}
        style={{ flex: 1, paddingHorizontal: 10 }}
      >
        <IdText>#{id}</IdText>
        <DataText>{new Date(notepad.created_at).toLocaleDateString()}</DataText>
        <TitleText>{notepad.title}</TitleText>
        <SubTitleText>{notepad.subtitle}</SubTitleText>
        <ContentText>{notepad.content}</ContentText>
        <Coords>Latitude: {notepad.latitude}</Coords>
        <Coords>Longitude: {notepad.longitude}</Coords>
        <View style={styles.viewMapButton}>
          <MapButton
            onPress={() => {
              navigation.navigate(screens.home, {
                coords: {
                  latitude: notepad.latitude,
                  longitude: notepad.longitude,
                },
              });
            }}
          >
            <Text style={styles.textButton}>Ver no Mapa</Text>
          </MapButton>
        </View>
        <View style={styles.viewButton}>
          <EditButton
            onPress={async () => {
              navigation.navigate(screens.notepadEdit, { id });
            }}
          >
            <Text style={styles.textButton}>Editar</Text>
          </EditButton>
          <DeleteButton
            onPress={async () => {
              const { data } = await api.delete(`/notepads/${id}`);
              if (data.success) {
                Toast.show("Notepad deletado com sucesso!");
                navigation.navigate(screens.notepadList);
              } else {
                Toast.show("Houve um erro ao deletar o seu notepad!");
              }
            }}
          >
            <Text style={styles.textButton}>Deletar</Text>
          </DeleteButton>
        </View>
      </ImageBackground>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  viewButton: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    marginTop: 20,
  },

  textButton: {
    fontSize: 22,
    color: "white",
  },

  viewMapButton: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
});
