import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

const Home = () => {
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<FontAwesomeIcon icon={faMugSaucer} style={styles.tabIcon} />
			<FontAwesomeIcon icon={faMugHot} />
			<FontAwesomeIcon icon={faHouse} />

			<Text>Home!jaawb</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	tabIcon: {
		color: "#aaaaaa",
	},

	tabIconAcive: {
		color: "#ff0000",
	},
});

export default Home;
