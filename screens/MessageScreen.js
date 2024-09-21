import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React from "react";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
// components
import Container from "../components/Container";
import MessageHeader from "../components/MessageHeader";
import Footer from "../components/Footer";

const MessageScreen = ({ navigation }) => {
	return (
		<Container bg="#F0F1F2">
			<MessageHeader />
			<View style={styles.container}>
				<View style={styles.messagesContent}>
					<View style={styles.replyMessage}>
						<Image
							source={require("../assets/woman.png")}
							style={{
								resizeMode: "stretch",
								width: 40,
								height: 40,
							}}
						/>
						<View style={styles.replyBox}>
							<Text style={styles.replyText}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</Text>
						</View>
					</View>

					<View style={styles.userMessage}>
						<Text style={styles.replyText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</Text>
					</View>
				</View>

				<View style={styles.replyMessage}>
					<Image
						source={require("../assets/woman.png")}
						style={{
							resizeMode: "stretch",
							width: 40,
							height: 40,
						}}
					/>
					<View style={styles.replyBox}>
						<Text style={styles.replyText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</View>
				</View>

				<View style={styles.chatButtons}>
					<View style={styles.actions}>
						<Pressable>
							<MCI name="microphone-outline" size={30} color={"#08B6D9"} />
						</Pressable>
						<Pressable>
							<MCI name="image-outline" size={30} color={"#08B6D9"} />
						</Pressable>
						<Pressable>
							<MCI name="camera-outline" size={30} color={"#08B6D9"} />
						</Pressable>
					</View>

					<TextInput
						style={styles.input}
						placeholder="Type a message..."
						placeholderTextColor={"#F0F1F2"}
					/>

					<Pressable>
						<MCI name="send" size={30} color={"#08B6D9"} />
					</Pressable>
				</View>
			</View>
			<Footer navigation={navigation} />
		</Container>
	);
};

export default MessageScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "90%",
		marginHorizontal: "auto",
		paddingVertical: 10,
		gap: 10,
    overflow: "scroll"
	},
	messagesContent: {
		flex: 1,
		justifyContent: "flex-end",
	},
	chatButtons: {
		backgroundColor: "#0B0C63",
		paddingVertical: 10,
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		gap: 10,
	},
	actions: {
		flexDirection: "row",
	},
	input: {
		color: "#F0F1F2",
		flex: 1,
	},
	replyMessage: {
		flexDirection: "row",
		gap: 20,
		marginVertical: 10,
	},
	replyBox: {
		flex: 1,
		padding: 15,
		backgroundColor: "#AFE8F3",
		borderRadius: 15,
	},
	replyText: {
		fontSize: 15,
	},
	userMessage: {
		maxWidth: "80%",
		alignSelf: "flex-end",
		marginVertical: 10,
		padding: 15,
		borderRadius: 15,
		backgroundColor: "#08B6D9",
	},
});
