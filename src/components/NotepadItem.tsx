import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import type { Notepad } from "../types";

export type NotepadItemProps = {
  onPress: () => void;
  notepad: Notepad;
};

const ItemTouchable = styled.TouchableOpacity`
  padding-vertical: 26px;
  padding-horizontal: 9px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #333;
  padding-top: 10px;
`;

const Data = styled.Text`
  font-size: 10px;
  color: #333;
  padding-bottom: 8px;
`;

export function NotepadItem({
  onPress,
  notepad: { title, subtitle, created_at },
}: NotepadItemProps) {
  return (
    <ItemTouchable onPress={onPress}>
      <Data>{new Date(created_at).toLocaleDateString()}</Data>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ItemTouchable>
  );
}
