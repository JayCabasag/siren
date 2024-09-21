import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

import MI from "react-native-vector-icons/MaterialIcons";

const ContactCard = ({
	id,
	name,
	number,
	source,
	event,
	selectedId,
	navigation,
}) => {
	return (
		<View
			style={[
				styles.contact,
				{
					paddingVertical: selectedId == id ? 0 : 10,
				},
			]}
		>
			<Pressable
				style={[
					styles.call,
					{
						display: id != selectedId ? "none" : "flex",
					},
				]}
			>
				<MI name="phone" color={"#D6F0F6"} size={40} />
			</Pressable>

			<Pressable style={styles.contactInfo} onPress={() => event(id)}>
				<Image
					source={source}
					style={{
						resizeMode: "stretch",
						width: 40,
						height: 40,
					}}
				/>
				<View>
					<Text style={styles.contactName}>{name}</Text>
					<Text style={styles.contactNumber}>{number}</Text>
				</View>
				<View style={styles.buttons}>
					<Pressable onPress={() => navigation.navigate("Messaging")}>
						<MI name="message" color={"#0B0C63"} size={25} />
					</Pressable>
					<Pressable>
						<MI name="videocam" color={"#0B0C63"} size={25} />
					</Pressable>
				</View>
			</Pressable>
		</View>
	);
};

export default ContactCard;

const styles = StyleSheet.create({
	contact: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		alignItems: "center",
		backgroundColor: "#D6F0F6",
		width: "90%",
		marginHorizontal: "auto",
		borderRadius: 20,
		marginVertical: 10,
		overflow: "hidden"
	},
	call: {
		backgroundColor: "#0B0C63",
		padding: 10,
		borderRadius: 10,
		position: "relative",
		left: -20,
	},
	contactInfo: {
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
		flex: 1,
		justifyContent: "space-between",
	},
	contactName: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#0B0C63",
	},
	contactNumber: {
		fontSize: 14,
		color: "#0B0C63",
	},

	buttons: {
		flexDirection: "row",
		alignItems: "center",
	},
});
