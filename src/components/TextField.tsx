import styled from "styled-components/native";
import { TextInput } from "react-native";

type TextProps = {
  placeholder: string;
  value: string;
  onChange: () => void;
};

export const TextField = styled.TextInput`
  margin-horizontal: 10px;
  margin-vertical: 10px;
`;

export function ComponenteBotao(props: TextProps) {
  return (
    <TextField
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></TextField>
  );
}
