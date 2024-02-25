import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

export default function App() {
	const [isLogin, setIsLogin] = useState(false);

	const handleLogin = (res) => {
		setIsLogin(res);
		setUserToken(res);
	};

	const handleLogout = () => {
		AsyncStorage.removeItem("appuser");
		setIsLogin(false);
		setUserToken(false);
	};

	const [userToken, setUserToken] = React.useState(false);

	useEffect(() => {
		AsyncStorage.getItem("appuser").then((res) => {
			//setIsLogin(res);

			if (res == null) {
				setIsLogin(false);
				setUserToken(false);
			} else {
				setIsLogin(true);
				setUserToken(true);
			}
		});
	}, [isLogin]);

	//const isLogin = getIsLogin();

	return (
		<>
			{isLogin && (
				<View>
					<Text>...</Text>
					<Button title="Logout" onPress={() => handleLogout()} />
				</View>
			)}
			{isLogin ? <Dashboard /> : <Login onLogin={handleLogin} />}
		</>
	);
}
