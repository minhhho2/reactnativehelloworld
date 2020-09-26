import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import LoginScreen from "./screens/LoginScreen";
import ComponentScreen from "./screens/ComponentScreen";
import DoubleSwiperScreen from "./screens/DoubleSwiperScreen";


const Root = createNativeStackNavigator()

export default function App() {
	console.log(`ScreenDimensions ${JSON.stringify(Dimensions.get('window'))}`);
	return (

		<View style={styles.container}>
			<ScrollView style={{width: '100%'}}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<LoginScreen/>
				<ComponentScreen/>
				<DoubleSwiperScreen/>
			</ScrollView>
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
