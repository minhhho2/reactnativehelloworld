import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, TextInput, TextInputChangeEventData, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Button, Input} from "react-native-elements";
import {BrandWhite} from "../styles/color-variables";

type loginForm = {
	username: string;
	usernameError: string;
	password: string;
	passwordError: string;
}

type loginFormFieldTypes = 'username' | 'usernameError' | 'password' | 'passwordError';

const loginFormInitialState: loginForm = {
	password: "", passwordError: "", username: "", usernameError: ""
}

export function LoginScreen() {

	const [loginForm, setLoginForm] = useState<loginForm>(loginFormInitialState);

	const fullDevLog = () => {
		console.log(`${JSON.stringify(loginForm, null, 4)}`);
	}

	const onChangeLoginForm = async (name: loginFormFieldTypes, value: string) => {
		var clonedLoginForm = {...loginForm};

		clonedLoginForm.usernameError = name === 'username' && value.length === 0 ? 'username cant' : '';
		clonedLoginForm.passwordError = name === 'password' && value.length === 0 ? 'pass cant' : '';

		setLoginForm({
			...clonedLoginForm,
			[name]: value
		});
	}

	const onClickLogin = () => {

		// TODO: REDIRECT LOGIN
	}

	useEffect(() => {
		console.log(`login screen useEffect executed`)
	}, [loginForm]);


	return (
		<View style={styles.loginScreen}>

			<View style={styles.loginForm}>

				<Input placeholder='Username'
				       errorMessage={loginForm.usernameError}
				       rightIcon={{ type: 'font-awesome', name: 'bug'}}
				       onChangeText={text => onChangeLoginForm('username', text)}
				       textContentType='username'
				/>
				<Input placeholder='Password'
				       errorMessage={loginForm.passwordError}
				       rightIcon={{ type: 'font-awesome', name: 'lock'}}
				       onChangeText={text => onChangeLoginForm('password', text)}
				       textContentType='password'
				/>

				<Button title='Login' onPress={onClickLogin}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	loginScreen: {
		width: '100%',
		backgroundColor: 'orange'
	},
	loginForm: {
		backgroundColor: BrandWhite,
		borderWidth: 1,
		borderRadius: 10,
		padding: 15
	}
});
