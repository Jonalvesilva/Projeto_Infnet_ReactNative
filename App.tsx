import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { Paragraph, ParagraphMasters } from "./src/components/Paragraph";
import {
  TitleDescriptionBasic,
  TitleDescriptionMasters,
} from "./src/components/TitleDescription";

export default function App() {
  return (
    <View style={{ paddingTop: 40, paddingHorizontal: 5 }}>
      <TitleDescriptionBasic title="Um titulo" description="Uma descrição" />
      <Text>Primeiro Teste do React Native</Text>
      <TextInput placeholder="Digite seu texto aqui"></TextInput>
      <Button
        title="Um teste para testar"
        onPress={() => Alert.alert("olá")}
      ></Button>
      <View>
        <ParagraphMasters>Eu sou inevitável</ParagraphMasters>
      </View>
    </View>
  );
}
