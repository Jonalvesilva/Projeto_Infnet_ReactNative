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
import { MaterialIcons } from "@expo/vector-icons/";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import { FontAwesome } from "@expo/vector-icons";
import { AppStateContext } from "./src/AppStateContext";
import { initialAppStateContext } from "./src/AppStateContext";
import { useState, useEffect } from "react";
import { Loader } from "./src/components/Loader";
import { api } from "./src/api";
import { RootSiblingParent } from "react-native-root-siblings";

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
  const [appState, setAppState] = useState(initialAppStateContext);

  useEffect(() => {
    const interceptorRequest = api.interceptors.request.use((config) => {
      setAppState({
        loading: true,
      });
      return config;
    });

    const interceptorResponse = api.interceptors.response.use((config) => {
      setAppState({
        loading: false,
      });
      return config;
    });

    return () => {
      api.interceptors.request.eject(interceptorRequest);
      api.interceptors.response.eject(interceptorResponse);
    };
  }, []);

  return (
    <RootSiblingParent>
      <AppStateContext.Provider value={appState}>
        <Loader loading={appState.loading} />
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
                drawerIcon({ color, size }) {
                  return (
                    <MaterialIcons color={color} size={size} name="home" />
                  );
                },
              }}
            ></Drawer.Screen>
            <Drawer.Screen
              name={screens.notepadCreate}
              component={NotepadCreate}
              options={{
                drawerIcon({ color, size }) {
                  return (
                    <MaterialIcons color={color} size={size} name="note-add" />
                  );
                },
              }}
            ></Drawer.Screen>
            <Drawer.Screen
              name={screens.notepadEdit}
              component={NotepadEdit}
              options={{
                drawerItemStyle: { display: "none" },
                drawerIcon({ color, size }) {
                  return (
                    <MaterialCommunityIcons
                      color={color}
                      size={size}
                      name="note-edit"
                    />
                  );
                },
              }}
            ></Drawer.Screen>
            <Drawer.Screen
              name={screens.notepadList}
              component={NotepadList}
              options={{
                drawerIcon({ color, size }) {
                  return (
                    <FontAwesome color={color} size={size} name="list-alt" />
                  );
                },
              }}
            ></Drawer.Screen>
            <Drawer.Screen
              name={screens.notepadView}
              component={NotepadView}
              options={{
                drawerItemStyle: { display: "none" },
                drawerIcon({ color, size }) {
                  return (
                    <FontAwesome color={color} size={size} name="sticky-note" />
                  );
                },
              }}
            ></Drawer.Screen>
          </Drawer.Navigator>
        </NavigationContainer>
      </AppStateContext.Provider>
    </RootSiblingParent>
  );
}
