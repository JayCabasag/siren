import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from "react-native-maps"; // Import MapView and Marker

const MapReport = () => {
  return (
		<View style={styles.map}>
			<MapView
				style={styles.mapView}
				initialRegion={{
					latitude: 37.78825, // Set default latitude
					longitude: -122.4324, // Set default longitude
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
			</MapView>
		</View>
	);
}

export default MapReport

const styles = StyleSheet.create({
	map: {
		height: 80,
		width: "90%",
		marginHorizontal: "auto",
		padding: 5,
		backgroundColor: "#08B6D9",
		marginTop: 10,
		borderRadius: 10,
        zIndex: 0
	},
	mapView: {
		flex: 1,
	},
});