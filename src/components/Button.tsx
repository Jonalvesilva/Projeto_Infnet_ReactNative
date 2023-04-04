import styled from "styled-components/native";
import { Button, Alert } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Botao = styled.Button`
  background-color: lightblue;
  color: white;
  padding: 8px;
`;

export function ComponenteBotao(props: ButtonProps) {
  return <Botao title={props.title} onPress={props.onPress}></Botao>;
}
