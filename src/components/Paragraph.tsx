import { StyleSheet, Text } from "react-native";

type tipo = {
  children: string;
};
export function Paragraph(props) {
  return <Text style={styles.paragraphStyle}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  paragraphStyle: {
    fontSize: 18,
    lineHeight: 24,
    color: "blue",
    marginVertical: 8,
  },
});
