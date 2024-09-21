import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ResponderSide from "../screens/ResponderSide";
import ResponderAlert from "../screens/ResponderAlert";

const Stack = createStackNavigator();

export const ResponderStack = () => {
    return (
      <Stack.Navigator>
                  <Stack.Screen name="ResponderSide" component={ResponderSide} />
                  <Stack.Screen name="ResponderAlert" component={ResponderAlert} />
                  <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    );
  };