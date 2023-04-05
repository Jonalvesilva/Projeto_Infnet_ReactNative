import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { NotepadCreate } from "./src/screens/NotepadCreate";
import { NotepadView } from "./src/screens/NotepadView";
import { NotepadList } from "./src/screens/NotepadList";
import { NotepadEdit } from "./src/screens/NotepadEdit";
import screens from "./src/screens.json";
import { AppBar } from "./src/components/AppBar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.home}>
        <Stack.Screen
          name={screens.home}
          component={Home}
          options={{ navigationBarColor: "#111827", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name={screens.notepadCreate}
          component={NotepadCreate}
        ></Stack.Screen>
        <Stack.Screen
          name={screens.notepadEdit}
          component={NotepadEdit}
        ></Stack.Screen>
        <Stack.Screen
          name={screens.notepadList}
          component={NotepadList}
        ></Stack.Screen>
        <Stack.Screen
          name={screens.notepadView}
          component={NotepadView}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
