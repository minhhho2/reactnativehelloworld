import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import LoginScreen from "./screens/LoginScreen";


const Root = createNativeStackNavigator()

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
