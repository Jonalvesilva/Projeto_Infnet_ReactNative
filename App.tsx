import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./src/screens/Home";
import { NotepadCreate } from "./src/screens/NotepadCreate";
import { NotepadView } from "./src/screens/NotepadView";
import { NotepadList } from "./src/screens/NotepadList";
import { NotepadEdit } from "./src/screens/NotepadEdit";
import screens from "./src/screens.json";
import { AppBar } from "./src/components/AppBar";
import * as NavigationBar from "expo-navigation-bar";

const Drawer = createDrawerNavigator();
const screenOptionNavigation = {
  swipeEnabled: false,
  headerStyle: { backgroundColor: "#111827", height: 100 },
  headerTitleStyle: { fontSize: 30 },
  headerTintColor: "white",
  drawerStyle: { backgroundColor: "lightgrey" },
};

export default function App() {
  NavigationBar.setBackgroundColorAsync("#111827");

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={screens.home}
        screenOptions={screenOptionNavigation}
      >
        <Drawer.Screen
          name={screens.home}
          component={Home}
          options={{
            headerRight: () => <AppBar></AppBar>,
            headerTitle: "",
            headerTitleStyle: { alignItems: "flex-end" },
          }}
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
