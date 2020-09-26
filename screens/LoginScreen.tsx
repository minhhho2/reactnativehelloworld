import {TextInput, View} from "react-native";
import React, {useState} from "react";


export function LoginScreen() {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View>
			<TextInput placeholder='enter username'
			           onChangeText={text => setUsername(text)}
			           textContentType='username'
			           />
			<TextInput placeholder='enter password'
			           onChangeText={text => setPassword(text)}
			           textContentType='password'
			/>




		</View>
	)
}
