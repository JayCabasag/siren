import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

// components
import StyledContainer from "../components/StyledContainer";
import Header from "../components/Header";
import ButtonContainer from "../components/ButtonContainer";

const EmergencyCallScreeen = () => {
	return (
		<StyledContainer bg="#93E1F0">
			<Header />
			<View style={styles.emergencyIndicator}>
				<Image
					source={require("../assets/panic_button_small.png")}
					style={styles.panicButtonImg}
				/>
				<Text style={styles.emegrncyText}>Emergency Calling...</Text>
			</View>
			<View style={styles.emergencyButtons}>
				<Text style={styles.infoText}>
					Your contact persons nearby, ambulance/police contacts will see your
					request for help.
				</Text>
				<ButtonContainer />
				<View style={styles.footer}>
					<Pressable>
						<Image
							source={require("../assets/microphone.png")}
							style={styles.footerIcon}
						/>
					</Pressable>
					<Pressable>
						<Image
							source={require("../assets/camera.png")}
							style={styles.footerIcon}
						/>
					</Pressable>
				</View>
			</View>
		</StyledContainer>
	);
};

export default EmergencyCallScreeen;

const styles = StyleSheet.create({
	emergencyIndicator: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	panicButtonImg: {
		resizeMode: "stretch",
		width: 200,
		height: 200,
		borderWidth: 10,
	},
	emegrncyText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#0B0C63",
	},

	emergencyButtons: {
		flex: 1.5,
		alignItems: "center",
		position: "relative",
	},
	infoText: {
		width: "85%",
		fontSize: 17,
		color: "#0B0C63",
		textAlign: "center",
	},
	footer:{
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 20,
		paddingHorizontal: 20
	},
	footerIcon:{
		resizeMode: "stretch",
		width: 40, height: 40
	}
});
