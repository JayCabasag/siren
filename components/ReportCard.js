import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ReportCard = ({ status = false}) => {
	return (
		<View style={styles.reportContainer}>
			<Image style={styles.profile} source={require("../assets//woman.png")} />
			<View
				style={[
					styles.report,
					{
						backgroundColor: status ? "green" : "red",
					},
				]}
			>
				<Text style={styles.reportTitle}>
					{status ? "RESPONDED" : "FALSE REPORT"}
				</Text>
				<Text style={styles.reportText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</View>
		</View>
	);
};

export default ReportCard;

const styles = StyleSheet.create({
	reportContainer: {
		flexDirection: "row",
		gap: 10,
		marginVertical: 10,
		alignItems: "flex-start",
	},
	profile: {
		resizeMode: "stretch",
		width: 50,
		height: 50,
	},
	report: {
		flex: 1,
		borderRadius: 10,
		padding: 10,
	},
	reportTitle: {
		fontSize: 20,
		color: "white",
		fontWeight: "bold",
	},
	reportText: {
		fontSize: 16,
		color: "white",
	},
});
