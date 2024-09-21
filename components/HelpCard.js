import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import IO from "react-native-vector-icons/Ionicons";

const HelpCard = () => {
	return (
		<View style={styles.helpCard}>
			<View style={styles.info}>
				<View style={styles.profile}>
					<Image
						style={styles.profilePic}
						source={require("../assets/woman.png")}
					/>
					<View style={styles.profileInfo}>
						<Text style={styles.name}>Lorem Ipsum</Text>
						<Text style={styles.email}>@loremIpsum</Text>
					</View>
				</View>
				<Text style={styles.helpTitle}>Help This Kid Smile Again</Text>
				<Text style={styles.helpBody}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Text>
				<View style={styles.buttonCOntainer}>
					<Pressable style={styles.donateButton}>
						<Text style={styles.donateText}>DONATE</Text>
					</Pressable>
					<Pressable>
						<IO name="heart-outline" size={20} color={"#0B0C63"} />
					</Pressable>
				</View>
			</View>
			<Image source={require("../assets/help.jpg")} style={styles.helpImg} />
		</View>
	);
};

export default HelpCard;

const styles = StyleSheet.create({
	helpCard: {
		flexDirection: "row",
		marginVertical: 10,
	},
	info: {
		flex: 1,
		padding: 5,
		justifyContent: "flex-start",
	},
	img: {
		padding: 5,
	},
	helpImg: {
		resizeMode: "stretch",
		width: "40%",
		maxHeight: 200,
		borderRadius: 12,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: 10,
	},
	profilePic: {
		resizeMode: "stretch",
		width: 40,
		height: 40,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#0B0C63",
		lineHeight: 18,
	},
	email: {
		fontSize: 14,
		color: "#0B0C63",
		lineHeight: 14,
	},
	helpTitle: {
		fontSize: 20,
		color: "#0B0C63",
		fontWeight: "bold",
		marginVertical: 5,
		lineHeight: 20,
	},
	helpBody: {
		flex: 1,
		fontSize: 12,
	},
	buttonCOntainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: 10,
	},
	donateButton: {
		backgroundColor: "#0B0C63",
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 10,
	},
	donateText: {
		color: "#fff",
	},
});
