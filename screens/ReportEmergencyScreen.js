import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import MI from "react-native-vector-icons/MaterialIcons";
import SLI from "react-native-vector-icons/SimpleLineIcons";

import Container from "../components/Container";
import Footer from "../components/Footer";
import MapReport from "../components/MapReport";
import FilterButton from "../components/FilterButton";
import * as ImagePicker from "expo-image-picker";

const ReportEmergencyScreen = ({ navigation }) => {
	const [showCateg, setShowCateg] = useState(false);
	const [selectedMedia, setSelectedMedia] = useState(null);


	const category = [
		{
			name: "Natural Disaster",
			img: require("../assets/flood.png"),
		},
		{
			name: "Fires and Explotions",
			img: require("../assets/fire.png"),
		},
		{
			name: "Road Accidents",
			img: require("../assets/road.png"),
		},
	];


  const pickImage = async () => {
		// Request media library permissions
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== "granted") {
			alert("Sorry, we need camera roll permissions to make this work!");
			return;
		}

		// Open the media library to pick an image or video
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All, // Choose from all media types (images and videos)
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedMedia(result.assets[0]);
		}
	};

	return (
		<Container bg="#D6F0F6">
			<View style={styles.back}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<MI name="arrow-back-ios" size={40} color={"#0B0C63"} />
				</TouchableOpacity>
				<Text style={styles.backText}>Report Emergency</Text>
			</View>
			<View style={styles.reportContainer}>
				<View style={styles.filterRowContainer}>
					<FilterButton text={"Date Time"} name={"calendar-month"} />
					<View style={[styles.filter, styles.categ]}>
						<TouchableOpacity
							style={[
								styles.filter,
								{
									width: "100%",
								},
							]}
							onPress={() => setShowCateg(!showCateg)}
						>
							<Text>Select Category</Text>
							<MI name={"arrow-downward"} size={30} color={"#0B0C63"} />
						</TouchableOpacity>
						{showCateg && (
							<View style={styles.categList}>
								{category.map((categ, index) => (
									<TouchableOpacity style={styles.category} key={index}>
										<Image source={categ.img} />
										<Text>{categ.name}</Text>
									</TouchableOpacity>
								))}
							</View>
						)}
					</View>
				</View>

				<View style={styles.filterRowContainer}>
					<FilterButton text={"Location"} name={"my-location"} />
				</View>
				<MapReport />

				<View style={styles.emergencyDetails}>
					<Text style={styles.emergencyDetailsText}>Emergency Details</Text>
					<TextInput
						placeholder="Ex. someone fell from the building, what do they need"
						style={styles.detailsInput}
						multiline={true}
						numberOfLines={7}
					/>
				</View>
				<Pressable style={styles.emergencyDetails} onPress={pickImage}>
					<Text style={styles.emergencyDetailsText}>Photos/Videos</Text>
					<View style={styles.iconUpload}>
						<SLI name="cloud-upload" size={40} color={"#0B0C63"} />
						<SLI name="camera" size={40} color={"#0B0C63"} />
					</View>
				</Pressable>
			</View>
			<Footer navigation={navigation} />
		</Container>
	);
};

export default ReportEmergencyScreen;

const styles = StyleSheet.create({
	back: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 20,
		paddingLeft: 20,
	},
	backText: {
		fontSize: 20,
		color: "#0B0C63",
		fontWeight: "bold",
	},
	reportContainer: {
		flex: 1,
	},
	filterRowContainer: {
		flexDirection: "row",
		width: "90%",
		marginHorizontal: "auto",
		gap: 10,
		marginTop: 10,
		justifyContent: "space-between",
		alignItems: "center",
		zIndex: 1,
	},
	filter: {
		flexDirection: "row",
		width: "48%",
		alignItems: "center",
		backgroundColor: "#08B6D9",
		justifyContent: "space-between",
		padding: 5,
		borderRadius: 10,
		position: "relative",
		zIndex: 1,
	},

	categList: {
		position: "absolute",
		width: "100%",
		bottom: -150,
		right: 0,
		padding: 5,
		backgroundColor: "#08B6D9",
		maxHeight: 150,
		height: 150,
		zIndex: 1,
		borderRadius: 10,
		overflow: "scroll",
		gap: 5,
	},
	category: {
		flexDirection: "row",
		backgroundColor: "#D6F0F6",
		paddingVertical: 10,
		gap: 10,
		paddingLeft: 5,
		borderRadius: 5,
	},
	emergencyDetails: {
		width: "90%",
		marginHorizontal: "auto",
		marginTop: 20,
		padding: 15,
		borderRadius: 15,
		backgroundColor: "#08B6D9",
	},
	emergencyDetailsText: {
		fontWeight: "bold",
		color: "#0B0C63",
	},
	detailsInput: {
		borderWidth: 1,
		textAlignVertical: "top",
		backgroundColor: "#D6F0F6",
		borderRadius: 20,
		marginTop: 10,
		padding: 10,
	},
	iconUpload: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
		paddingVertical: 10,
	},
});
