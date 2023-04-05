import "react-native-gesture-handler";
import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./src/screens/Home";
import { NotepadCreate } from "./src/screens/NotepadCreate";
import { NotepadView } from "./src/screens/NotepadView";
import { NotepadList } from "./src/screens/NotepadList";
import { NotepadEdit } from "./src/screens/NotepadEdit";
import screens from "./src/screens.json";
import { AppBar } from "./src/components/AppBar";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={screens.home}>
        <Drawer.Screen
          name={screens.home}
          component={Home}
          options={{ headerShown: false }}
        ></Drawer.Screen>
        <Drawer.Screen
          name={screens.notepadCreate}
          component={NotepadCreate}
        ></Drawer.Screen>
        <Drawer.Screen
          name={screens.notepadEdit}
          component={NotepadEdit}
        ></Drawer.Screen>
        <Drawer.Screen
          name={screens.notepadList}
          component={NotepadList}
        ></Drawer.Screen>
        <Drawer.Screen
          name={screens.notepadView}
          component={NotepadView}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
