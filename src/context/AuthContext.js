import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const baseUrl = "https://learning2.pt-mine.id";
export const AuthProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);

	const handleLogin = (res) => {
		setIsLogin(true);
		AsyncStorage.setItem("appuser", JSON.stringify(res));
	};

	const handleLogout = () => {
		setIsLogin(false);
		AsyncStorage.removeItem("appuser");
	};

	return (
		<AuthContext.Provider value={{ isLogin, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const AuthToken = async () => {
	const app = await AsyncStorage.getItem("appuser");
	let appuser = JSON.parse(app);
	console.log("Bearer " + appuser.token);
	return appuser.token;
};
