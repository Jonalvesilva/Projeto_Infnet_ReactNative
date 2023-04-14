import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import { api } from "../api";
import Toast from "react-native-root-toast";
import screens from "../screens.json";
import { Notepad } from "../types";

const initialForm = {
  title: "",
  subtitle: "",
  content: "",
  latitude: 0,
  longitude: 0,
};

const Container = styled.View`
  padding: 10px;
`;

const TitleText = styled.Text`
  color: darkblue;
  font-size: 26px;
  font-weight: bold;
  padding-vertical: 10px;
  text-align: center;
`;

const TextField = styled.TextInput`
  background-color: #f7d8942f;
  border: 2px;
  border-radius: 10px;
  padding: 10px;
  font-size: 24px;
  margin-vertical: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: #269e98;
  height: 50px;
  border-radius: 10px;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

export function NotepadEdit({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const [form, setForm] = useState(initialForm);
  const id = route.params.id;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const {
        data: { title, subtitle, content, latitude, longitude },
      } = await api.get<Notepad>(`/notepads/${id}`);
      setForm({
        title,
        subtitle,
        content,
        latitude,
        longitude,
      });
    });

    return unsubscribe;
  }, [id]);

  return (
    <Container>
      <TitleText>Editar Notepad</TitleText>
      <TextField
        value={form.title}
        onChangeText={(title) => setForm({ ...form, title })}
        placeholder="Digite o seu título"
      ></TextField>
      <TextField
        value={form.subtitle}
        onChangeText={(subtitle) => setForm({ ...form, subtitle })}
        placeholder="Digite o seu subtítulo"
      ></TextField>
      <TextField
        value={form.latitude.toString()}
        onChangeText={(latitude) =>
          setForm({ ...form, latitude: Number(latitude) })
        }
        placeholder="Digite a latitude"
      ></TextField>
      <TextField
        value={form.longitude.toString()}
        onChangeText={(longitude) =>
          setForm({ ...form, longitude: Number(longitude) })
        }
        placeholder="Digite a longitude"
      ></TextField>
      <TextField
        value={form.content}
        onChangeText={(content) => setForm({ ...form, content })}
        placeholder="Digite o seu conteúdo"
        multiline={true}
        numberOfLines={4}
      ></TextField>
      <Button
        onPress={async () => {
          const { data } = await api.put(`/notepads/${id}`, form);
          if (data.success) {
            Toast.show("Notepad editado com sucesso!");
            navigation.navigate(screens.notepadView, {
              id,
            });
          } else {
            Toast.show(data.errors[0].message);
          }
        }}
      >
        <Text style={styles.texto}>Enviar</Text>
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "white",
    fontSize: 30,
  },
});
