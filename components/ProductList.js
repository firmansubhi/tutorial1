import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default ProductList = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>This is example product list page</Text>
			<Button title="coba" onPress={() => navigation.navigate("Home")} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
});
