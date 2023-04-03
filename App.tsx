import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { Paragraph } from "./src/components/Paragraph";

export default function App() {
  return (
    <View>
      <Text>Primeiro Teste do React Native</Text>
      <TextInput placeholder="Digite seu texto aqui"></TextInput>
      <Button
        title="Um teste para testar"
        onPress={() => Alert.alert("olá")}
      ></Button>
      <View>
        <Paragraph>Eu sou inevitável</Paragraph>
      </View>
    </View>
  );
}
