import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import MapContent from "../components/MapContent";

const EmergencyMapScreen = ({navigation}) => {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	let text = "Waiting..";

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
	}

	return (
		<View style={styles.container}>
			{location ? (
				<>
					<MapView
						style={StyleSheet.absoluteFillObject}
						initialRegion={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
					>
						<Marker
							coordinate={{
								latitude: location.coords.latitude,
								longitude: location.coords.longitude,
							}}
							title="You are here"
						/>
					</MapView>
          <MapContent navigation={navigation} />
				</>
			) : (
				<View style={styles.loadingContainer}>
					<Text>{text}</Text>
				</View>
			)}
		</View>
	);
};

export default EmergencyMapScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

});
