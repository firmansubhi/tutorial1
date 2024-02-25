import React, { useState } from "react";

export const AuthContext = React.createContext(null);

//const initialState = {
//	isLoggedIn: false,
//	isLoginPending: false,
//	loginError: null,
//};

export const ContextProvider = (props) => {
	const [state, setState] = useSetState(initialState);

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoginPending, setIsLoginPending] = useState(false);
	const [loginError, setLoginError] = useState(null);

	//const setLoginPending = (isLoginPending) => setState({ isLoginPending });
	//const setLoginSuccess = (isLoggedIn) => setState({ isLoggedIn });
	//const setLoginError = (loginError) => setState({ loginError });

	const login = (email, password) => {
		fetchLogin(email, password, (error) => {
			setIsLoginPending(false);

			if (!error) {
				setIsLoggedIn(true);
			} else {
				setLoginError(error);
			}
		});
	};

	const logout = () => {
		setIsLoginPending(false);
		setIsLoggedIn(false);
		setLoginError(null);
	};

	return (
		<AuthContext.Provider
			value={{
				state,
				login,
				logout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

// fake login
const fetchLogin = (email, password, callback) =>
	setTimeout(() => {
		if (email === "admin" && password === "admin") {
			return callback(null);
		} else {
			return callback(new Error("Invalid email and password"));
		}
	}, 1000);
