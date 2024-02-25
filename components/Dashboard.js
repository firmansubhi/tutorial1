import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import AllProduct from "./AllProduct";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SettingScreen() {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Home Setting</Text>
		</View>
	);
}

function DetailsScreen() {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Details Screen</Text>
		</View>
	);
}

function ProfileScreen() {
	const onPressL = () => {};
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>profile Setting</Text>

			<Button title="Logout" onPress={onPressL} />
		</View>
	);
}

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home1" component={SettingScreen} />
			<HomeStack.Screen name="Details" component={DetailsScreen} />
		</HomeStack.Navigator>
	);
}

const ProductStack = createNativeStackNavigator();
function ProductStackScreen() {
	return (
		<ProductStack.Navigator>
			<ProductStack.Screen name="AllProduct" component={AllProduct} />
			<ProductStack.Screen name="ProductList" component={ProductList} />
			<ProfileStack.Screen name="ProductForm" component={ProductForm} />
		</ProductStack.Navigator>
	);
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
			/>
			<ProfileStack.Screen name="ProductForm2" component={ProductForm} />
		</ProfileStack.Navigator>
	);
}

export default function Dashboard({ onLogout }) {
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
						} else if (route.name === "Product") {
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
						} else if (route.name === "Profile") {
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
					headerShown: false,
				})}
			>
				<Tab.Screen name="Home" component={HomeStackScreen} />
				<Tab.Screen name="Product" component={ProductStackScreen} />
				<Tab.Screen name="Profile" component={ProfileStackScreen} />
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
