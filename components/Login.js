import axios from "axios";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	Pressable,
	Alert,
	ActivityIndicator,
	Platform,
} from "react-native";

export default function Login({ onLogin }) {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [loading, setLoading] = useState(false);

	const onPressLogin = async () => {
		setLoading(true);

		const formData = new FormData();
		formData.append("useremail", email);
		formData.append("userpassword", password);

		axios
			.post("https://learning2.pt-mine.id/login", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				if (response.data.result) {
					AsyncStorage.setItem(
						"appuser",
						JSON.stringify(response.data.userData)
					).then((res) => {
						onLogin(true);
					});
				} else {
					onLogin(false);
					Alert.alert("Failed", response.data.message);

					if (Platform.OS === "web") {
						alert(response.data.message);
					}
				}

				setLoading(false);
			})
			.catch((error) => {
				console.error("Error sending data: ", error);
				setLoading(false);
			});
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.loginLogo}
				source={{
					uri: "https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo@2x.png",
				}}
			/>

			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Email"
					placeholderTextColor="#999999"
					onChangeText={(text) => setEmail(text)}
				/>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					secureTextEntry
					placeholder="Password"
					placeholderTextColor="#999999"
					onChangeText={(text) => setPassword(text)}
				/>
			</View>
			{loading && <ActivityIndicator size="large" color="#8EC641" />}
			<Pressable
				onPress={onPressLogin}
				style={styles.loginBtn}
				disabled={loading}
			>
				<Text style={styles.loginText}>
					{loading ? "Please Wait" : "Login"}
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	loginLogo: {
		width: 60,
		height: 50,
		marginBottom: 20,
	},

	inputView: {
		width: "80%",
		backgroundColor: "#E8F0FE",
		borderRadius: 5,
		height: 50,
		marginBottom: 20,
		justifyContent: "center",
		padding: 20,
	},
	inputText: {
		height: 50,
	},

	loginBtn: {
		width: "80%",
		backgroundColor: "#1F2937",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
		marginBottom: 10,
	},

	loginText: {
		color: "#ffffff",
	},
});
