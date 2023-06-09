import { View, FlatList } from "react-native";
import { useEffect, useState, useContext } from "react";
import type { ParamListBase } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import screens from "../screens.json";
import { api } from "../api";
import type { Notepad } from "../types";
import { NotepadItem } from "../components/NotepadItem";

const initialNotepads: Notepad[] = [];

export function NotepadList({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const [notepads, setNotepads] = useState(initialNotepads);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get<Notepad[]>("/notepads");
      setNotepads(data);
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <FlatList
        data={notepads}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => {
          return (
            <NotepadItem
              notepad={item}
              onPress={() => {
                navigation.navigate(screens.notepadView, {
                  id: item.id,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
}
