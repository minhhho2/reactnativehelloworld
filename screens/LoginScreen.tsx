import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, TextInput, TextInputChangeEventData, View, ViewStyle} from "react-native";
import React, {useEffect, useState} from "react";
import {Button, Input, Text as RmeText} from "react-native-elements";
import {BrandOrange, BrandWhite} from "../styles/color-variables";
import AlertComponent from "../components/alert/AlertComponent";
import moment from "moment";

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
				<RmeText h1 h1Style={{margin: 'auto', fontStyle: 'italic', fontWeight: '900', color: BrandOrange}}>neds</RmeText>

				<AlertComponent text={'Example error message'} type={'error'} />
				<AlertComponent text={'Example success message'} type={'success'} />
				<AlertComponent text={'Example info message'} type={'info'} />
				<AlertComponent text={'Example warning message'} type={'warning'} />

				<Input placeholder='Username'
				       errorMessage={loginForm.usernameError}
				       rightIcon={{type: 'font-awesome', name: 'facebook'}}
				       onChangeText={text => onChangeLoginForm('username', text)}
				       textContentType='username'
				/>

				<Input placeholder='Password'
				       errorMessage={loginForm.passwordError}
				       rightIcon={{type: 'font-awesome', name: 'lock'}}
				       onChangeText={text => onChangeLoginForm('password', text)}
				       textContentType='password'
				/>

				<Button buttonStyle={loginButton}
				        title='Log in'
				        onPress={onClickLogin}/>
			</View>

			<View style={styles.signupContent}>

				<Text style={styles.signupLabel}>TAKE IT TO THE NEDS LEVEL</Text>

				<Button
					containerStyle={joinNowContainer}
					buttonStyle={joinNowButton}
					title='Join Now'/>
			</View>
		</View>
	)
}

const loginButton = {
	backgroundColor: BrandOrange
}

const joinNowContainer = {
	width: '60%',
}
const joinNowButton = {
	backgroundColor: BrandOrange,
	borderWidth: 1,
	borderColor: BrandWhite,
}

const styles = StyleSheet.create({
	loginScreen: {
		width: '100%',
		backgroundColor: BrandOrange,
	},
	loginForm: {
		backgroundColor: BrandWhite,
		borderRadius: 10,
		padding: 30
	},
	signupContent: {
		width: '100%',
		paddingVertical: 20,
		alignItems: 'center'
	},
	signupLabel: {
		paddingBottom: 10,
		fontStyle: 'italic',
		color: BrandWhite,
	},
});
