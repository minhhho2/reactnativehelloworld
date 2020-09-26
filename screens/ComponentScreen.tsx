import React, {Component} from "react";
import {ActivityIndicator, TextInput, View} from "react-native";
import AlertComponent from "../components/alert/AlertComponent";
import {BlurView} from "expo-blur";
import {BrandWhite} from "../styles/color-variables";

const ComponentScreen = () => {

	return (
		<View>

			<View style={{padding: 30, backgroundColor: BrandWhite}}>
				<BlurView style={{padding: 20}} intensity={40} tint={'dark'}>
					<ActivityIndicator animating={true}/>
				</BlurView>
			</View>

			<AlertComponent text={'Example error message'} type={'error'}/>
			<AlertComponent text={'Example success message'} type={'success'}/>
			<AlertComponent text={'Example info message'} type={'info'}/>
			<AlertComponent text={'Example warning message'} type={'warning'}/>
		</View>
	)
}
export default ComponentScreen;
