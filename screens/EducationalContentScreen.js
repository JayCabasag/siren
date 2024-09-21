import {
	Pressable,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React from "react";

import IO from "react-native-vector-icons/Ionicons";

// components
import Container from "../components/Container";
import Footer from "../components/Footer";

const EducationalContentScreen = ({ navigation }) => {
	const categories = [
		{
			id: 1,
			name: "First Aid",
			image: require("../assets/first-aid-kit.png"),
		},
		{
			id: 2,
			name: "Survival Tips",
			image: require("../assets/survival.png"),
		},
		{
			id: 3,
			name: "Preparedness",
			image: require("../assets/preparation.png"),
		},
		{
			id: 4,
			name: "Accident Prevention",
			image: require("../assets/injuries.png"),
		},
	];

	const CategoryCard = ({ name, image }) => (
		<Pressable style={styles.categCard}>
			<Image source={image} style={styles.categImg} />
			<Text style={styles.categText}>{name}</Text>
		</Pressable>
	);

	return (
		<Container bg="#AFE8F3">
			<View style={styles.header}>
				<View style={styles.headerAction}>
					<Pressable>
						<IO name="menu" size={40} color={"#0B0C63"} />
					</Pressable>
					<Pressable>
						<IO name="search-circle" size={40} color={"#0B0C63"} />
					</Pressable>
				</View>
				<Text style={styles.title}>Educational Content</Text>
			</View>

			<View style={styles.info}>
				<View style={styles.textInfo}>
					<Text style={styles.titleText}>Lorem Ipsum</Text>
					<Text style={styles.bodyText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
						urna vel sapien aliquam posuere.
					</Text>
					<View style={styles.watchNow}>
						<Text style={styles.watchNowText}>Watch Now</Text>
						<IO name="play-circle" size={20} color={"#0B0C63"} />
					</View>
				</View>
				<View style={styles.image}>
					<Image
						source={require("../assets/education.png")}
						style={styles.imageContent}
					/>
				</View>
			</View>

			<View style={styles.container}>
				<Text style={styles.title}>Categories</Text>
				<View style={styles.flatListContainer}>
					<FlatList
						data={categories}
						renderItem={({ item }) => (
							<CategoryCard name={item.name} image={item.image} />
						)}
						keyExtractor={(item) => item.id.toString()}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</View>

			<Footer navigation={navigation} />
		</Container>
	);
};

export default EducationalContentScreen;

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
	info: {
		flexDirection: "row",
		width: "90%",
		marginHorizontal: "auto",
		paddingVertical: 15,
		paddingHorizontal: 20,
		backgroundColor: "#F0F1F2",
		borderRadius: 30,
		position: "relative",
		top: -30,
	},
	image: {
		flex: 0.6,
		position: "relative",
		right: -10,
	},
	imageContent: {
		resizeMode: "stretch",
		width: 130,
		height: 130,
	},
	textInfo: {
		flex: 1,
	},
	titleText: {
		fontSize: 22,
		color: "#0B0C63",
		fontWeight: "bold",
	},
	bodyText: {
		fontSize: 12,
		textAlign: "justify",
		color: "#0B0C63",
	},
	watchNow: {
		flexDirection: "row",
		marginHorizontal: "auto",
		marginTop: 10,
		alignItems: "center",
		backgroundColor: "#08B6D9",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 20,
		gap: 10,
	},
	watchNowText: {
		fontWeight: "bold",
	},

	container: {
		flex: 1,
		position: "relative",
		top: -30,
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
	},
	flatListContainer: {
		height: 150, // Set a fixed height for the FlatList container
	},
	categCard: {
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		borderRadius: 20,
		marginHorizontal: 10, // Add spacing between cards
		height: 130, // Set a fixed height for the category card
	},
	categImg: {
		resizeMode: "stretch",
		width: 70,
		height: 70,
	},
	categText: {
		fontSize: 20,
		color: "#0B0C63",
		fontWeight: "bold",
		marginTop: 10,
	},
});
