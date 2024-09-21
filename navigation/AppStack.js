import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EmergencyCallScreeen from "../screens/EmergencyCallScreen";
import EmergencyMapScreen from "../screens/EmergencyMapScreen";
import ReportEmergencyScreen from "../screens/ReportEmergencyScreen";
import EmergencyAlertScreen from "../screens/EmergencyAlertScreen";
import ContactScreen from "../screens/ContactScreen";
import MessageScreen from "../screens/MessageScreen";
import EducationalContentScreen from "../screens/EducationalContentScreen";
import CommunitySupportScreen from "../screens/CommunitySupportScreen";
import ReportHistoryScreen from "../screens/ReportHistoryScreen";
import HomeScreen from "../screens/HomeScreen";
import ResponderSide from "../screens/ResponderSide";
import ResponderAlert from "../screens/ResponderAlert";
import SettingScreen from "../screens/SettingScreen";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EmergencyCall" component={EmergencyCallScreeen} />
				<Stack.Screen name="Map" component={EmergencyMapScreen} />
				<Stack.Screen name="ReportEmergency" component={ReportEmergencyScreen} />
				<Stack.Screen name="ViewAlert" component={EmergencyAlertScreen} />
				<Stack.Screen name="Contact" component={ContactScreen} />
				<Stack.Screen name="Messaging" component={MessageScreen} />
				<Stack.Screen name="Educational" component={EducationalContentScreen} />
				<Stack.Screen name="CommunitySupport" component={CommunitySupportScreen} />
				<Stack.Screen name="ReportHistory" component={ReportHistoryScreen} />
				<Stack.Screen name="ResponderSide" component={ResponderSide} />
				<Stack.Screen name="ResponderAlert" component={ResponderAlert} />
				<Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
