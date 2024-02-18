import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

import HomeScreen from "./components/Home";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

function SettingsScreen() {
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Settings!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						if (route.name === "Home") {
							return (
								<FontAwesomeIcon
									icon={faHouse}
									style={
										focused
											? styles.tabIconAcive
											: styles.tabIcon
									}
								/>
							);
						} else if (route.name === "Product List") {
							return (
								<FontAwesomeIcon
									icon={faMugHot}
									style={
										focused
											? styles.tabIconAcive
											: styles.tabIcon
									}
								/>
							);
						} else if (route.name === "Create Product") {
							return (
								<FontAwesomeIcon
									icon={faPlus}
									style={
										focused
											? styles.tabIconAcive
											: styles.tabIcon
									}
								/>
							);
						}
					},
					tabBarInactiveTintColor: "gray",
					tabBarActiveTintColor: "tomato",
				})}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Product List" component={ProductList} />
				<Tab.Screen name="Create Product" component={ProductForm} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	tabIcon: {
		color: "#aaaaaa",
	},

	tabIconAcive: {
		color: "#ff0000",
	},
});
