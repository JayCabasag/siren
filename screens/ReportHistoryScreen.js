import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import IO from "react-native-vector-icons/Ionicons";

import Container from "../components/Container";
import ReportCard from "../components/ReportCard";

const ReportHistoryScreen = () => {
	return (
		<Container bg="#AFE8F3">
			<View style={styles.header}>
				<View style={styles.headerAction}>
					<Pressable>
						<IO name="menu" size={40} color={"#0B0C63"} />
					</Pressable>
					<Pressable>
						<IO name="search-circle" size={40} color={"#F0F1F2"} />
					</Pressable>
				</View>
				<Text style={styles.title}>Report History</Text>
			</View>

			<View style={styles.container}>
				<ReportCard />
				<ReportCard status={true} />
			</View>
		</Container>
	);
};

export default ReportHistoryScreen;

const styles = StyleSheet.create({
	header: {
		paddingTop: 15,
		paddingBottom: 50,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		backgroundColor: "#08B6D9",
		gap: 20,
		paddingHorizontal: 20,
	},
	headerAction: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 30,
		color: "#0B0C63",
		fontWeight: "bold",
	},
	container: {
		flex: 1,
		width: "90%",
		marginHorizontal: "auto",
		backgroundColor: "#F0F1F2",
		paddingHorizontal: "3%",
	},
});
