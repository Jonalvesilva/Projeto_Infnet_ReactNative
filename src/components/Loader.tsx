import { ActivityIndicator } from "react-native/";
import styled from "styled-components/native";

const BackDrop = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #1f1d1e78;
`;

export type LoaderProps = {
  loading: boolean;
};

export function Loader({ loading }: LoaderProps) {
  if (loading) {
    return (
      <BackDrop>
        <ActivityIndicator size={72}></ActivityIndicator>
      </BackDrop>
    );
  } else {
    return null;
  }
}
