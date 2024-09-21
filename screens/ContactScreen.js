import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Pressable,
	Image,
  FlatList
} from "react-native";
import React, { useState } from "react";
import MI from "react-native-vector-icons/MaterialIcons";
import FS from "react-native-vector-icons/FontAwesome";

import Container from "../components/Container";
import ContactCard from "../components/ContactCard";

const ContactScreen = ({ navigation }) => {
  const [selectedContactId, setSelectedContactId] = useState(null)
	const personalContacts = [
		{
      id: 1,
			name: "Lorem Ipsum",
			number: "+123456789",
			profile: require("../assets/woman_small.png"),
		},
		{
      id: 2,
			name: "Lorem Ipsum",
			number: "+123456789",
			profile: require("../assets/woman_small.png"),
		},
		{
      id: 3,
			name: "Lorem Ipsum",
			number: "+123456789",
			profile: require("../assets/woman_small.png"),
		},
	];
	const emergencyContact = [
		{
      id: 4,
			name: "Lorem Ipsum",
			number: "+123456789",
			profile: require("../assets/badge.png"),
		},
		{
      id: 5,
			name: "Lorem Ipsum",
			number: "+123456789",
			profile: require("../assets/ambulance.png"),
		},
		{
      id: 6,
			name: "Lorem Ipsum",
			number: "+123456789",
			profile: require("../assets/badge.png"),
		},
	];


  const handleSelectContact = (id) => {
    setSelectedContactId(id)
  }

	return (
		<Container bg="#0B0C63">
			<View style={styles.lightBg} />
			<View style={styles.back}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<MI name="arrow-back-ios" size={40} color={"#D6F0F6"} />
				</TouchableOpacity>
				<FS
					name="user-circle"
					size={40}
					color="#D6F0F6"
					style={{ marginLeft: "10%" }}
				/>
				<Text style={styles.backText}>Contacts</Text>
			</View>

			<View style={styles.container}>
				<View style={styles.contactContainer}>
					<Text style={styles.header}>Personal Contacts</Text>

					<View style={styles.contacts}>
						<FlatList
							data={personalContacts}
							renderItem={({ item }) => (
								<ContactCard
									id={item.id}
									name={item.name}
									number={item.number}
									source={item.profile}
									event={handleSelectContact}
									selectedId={selectedContactId}
									navigation={navigation}
								/>
							)}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</View>

				<View style={styles.contactContainer}>
					<Text style={styles.header}>Emergency Contacts</Text>
					<View style={styles.contacts}>
						<FlatList
							data={emergencyContact}
							renderItem={({ item }) => (
								<ContactCard
									id={item.id}
									name={item.name}
									number={item.number}
									source={item.profile}
									event={handleSelectContact}
									selectedId={selectedContactId}
									navigation={navigation}
								/>
							)}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</View>
			</View>
		</Container>
	);
};

export default ContactScreen;

const styles = StyleSheet.create({
	lightBg: {
		position: "absolute",
		height: "62%",
		width: "100%",
		bottom: 0,
		left: 0,
		backgroundColor: "#D6F0F6",
	},
	back: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 20,
		paddingLeft: 20,
		gap: 10,
		marginTop: 10,
	},
	backText: {
		fontSize: 30,
		color: "#D6F0F6",
		fontWeight: "bold",
	},

	container: {
		flex: 1,
		marginTop: "15%",
		width: "91%",
		marginHorizontal: "auto",
		backgroundColor: "#08B6D9",
		borderRadius: 30,
	},
	header: {
		marginVertical: 15,
		textAlign: "center",
		width: "50%",
		paddingVertical: 7,
		borderRadius: 20,
		backgroundColor: "#D6F0F6",
		marginHorizontal: "auto",
		color: "#0B0C63",
		fontWeight: "bold",
	},
	contactContainer: {
		flex: 1,
	},
	contacts: {
		flex: 1,
	},
	
});
