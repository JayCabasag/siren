import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../screens/HomeScreen";
import EmergencyCallScreeen from "../screens/EmergencyCallScreen";
import EmergencyMapScreen from "../screens/EmergencyMapScreen";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="EmergencyCall" component={EmergencyCallScreeen} />
				<Stack.Screen name="Map" component={EmergencyMapScreen} />
				{/* <Stack.Screen name="ReportEmergency" component={ReportEmergency} />
				<Stack.Screen name="ViewAlert" component={ViewAlert} />
				<Stack.Screen name="Contact" component={Contact} />
				<Stack.Screen name="Messaging" component={Messaging} />
				<Stack.Screen name="Educational" component={Educational} />
				<Stack.Screen name="CommunitySupport" component={CommunitySupport} />
				<Stack.Screen name="ReportHistory" component={ReportHistory} />
				<Stack.Screen name="ResponderSide" component={ResponderSide} />
				<Stack.Screen name="ResponderAlert" component={ResponderAlert} />
				<Stack.Screen name="Setting" component={Setting} /> */}
    </Stack.Navigator>
  );
};
