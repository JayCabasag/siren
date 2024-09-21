import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MI from "react-native-vector-icons/MaterialIcons";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";

// components
import StyledContainer from "../components/StyledContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ResponderSide = ({ navigation }) => {
	return (
		<StyledContainer>
			<Header responder={true} />
			<View style={styles.container}>
				<Image
					source={require("../assets/police-logo.png")}
					style={styles.bg}
				/>

				<View style={styles.blocker} />

				<View style={styles.buttons}>
					<Pressable style={styles.button}>
						<MI name="phone" size={60} color={"#D7F1F7"} />
                        <Text style={styles.text}>Emergency Call</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={() => navigation.navigate("ResponderAlert")}>
						<MCI name="monitor-eye" size={60} color={"#D7F1F7"} />
                        <Text style={styles.text}>View Alerts</Text>
					</Pressable>
					<Pressable style={styles.button}>
						<MCI name="message-text" size={60} color={"#D7F1F7"} />
                        <Text style={styles.text}>Emergency Text</Text>
					</Pressable>
				</View>
			</View>

			<Footer navigation={navigation} />
		</StyledContainer>
	);
};

export default ResponderSide;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	bg: {
		position: "absolute",
		resizeMode: "contain",
		width: "100%",
		top: -30
	},
	blocker: {
		flex: 1,
	},
	buttons: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
        marginBottom: 10
	},
	button: {
		width: "30%",
		aspectRatio: 1,
		backgroundColor: "#08B6D9",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#D7F1F7",
        textAlign: "center"
	},
});
