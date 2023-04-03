import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

type tipo = {
  children: string;
};
export function Paragraph(props) {
  return <Text style={styles.paragraphStyle}>{props.children}</Text>;
}

export const ParagraphMasters = styled.Text`
  font-size: 18px;
  line-height: 24px;
  color: blue;
  margin-vertical: 8px;
`;

const styles = StyleSheet.create({
  paragraphStyle: {
    fontSize: 18,
    lineHeight: 24,
    color: "blue",
    marginVertical: 8,
  },
});
