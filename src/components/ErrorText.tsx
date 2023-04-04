import { Text } from "react-native";
import styled from "styled-components/native";

type ErrorProps = {
  message: string;
  error: boolean;
};

const ErrorText = styled.Text`
  font-size: 16px;
  color: red;
`;

export function TextError({ message, error }: ErrorProps) {
  if (error) {
    return (
      <ErrorText message={message} error={error}>
        {message}
      </ErrorText>
    );
  } else {
    return;
  }
}
