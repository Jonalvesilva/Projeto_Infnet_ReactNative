import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Notepad } from "../types";
import screens from "../screens.json";
import { api } from "../api";

const initialNotepad: Notepad = {
  id: 0,
  title: "",
  subtitle: "",
  created_at: "",
  content: "",
  latitude: "",
  longitude: "",
};

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
  });

  return (
    <View>
      <Text>{id}</Text>
      <Text>{notepad.title}</Text>
      <Text>{notepad.subtitle}</Text>
      <Text>{new Date(notepad.created_at).toLocaleDateString()}</Text>
      <Text>{notepad.content}</Text>
    </View>
  );
}
