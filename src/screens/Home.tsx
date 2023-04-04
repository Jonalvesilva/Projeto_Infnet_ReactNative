import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { Paragraph, ParagraphMasters } from "../components/Paragraph";
import {
  TitleDescriptionBasic,
  TitleDescriptionMasters,
} from "../components/TitleDescription";
import { ComponenteBotao } from "../components/Button";
import { TextField } from "../components/TextField";
import { Heading } from "../components/Heading";
import { TextError } from "../components/ErrorText";

export function Home() {
  return (
    <View style={{ paddingTop: 40, paddingHorizontal: 5 }}>
      <ComponenteBotao
        title="Olá Mundo"
        onPress={() => {
          Alert.alert("Meu mundo é o barro");
        }}
      ></ComponenteBotao>
      <TextField
        placeholder="Digite aqui"
        value=""
        onChange={() => {
          console.log("azul");
        }}
      ></TextField>
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
      <Heading header="h1" title="O mundo é bão sebastiao"></Heading>
      <TextError message="Voce nao deu block" error={true}></TextError>
    </View>
  );
}
