import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {LoginScreen} from "./screens/LoginScreen";

export default function App() {
	console.log(`ScreenDimensions ${JSON.stringify(Dimensions.get('window'))}`);
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<LoginScreen/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'grey',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
