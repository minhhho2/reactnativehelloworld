import React, {Component} from "react";
import {ActivityIndicator, TextInput, View} from "react-native";
import AlertComponent from "../components/alert/AlertComponent";

const ComponentScreen = () => {

	return (
		<View>
			<View>
				<ActivityIndicator animating={true} />
			</View>
			<AlertComponent text={'Example error message'} type={'error'} />
			<AlertComponent text={'Example success message'} type={'success'} />
			<AlertComponent text={'Example info message'} type={'info'} />
			<AlertComponent text={'Example warning message'} type={'warning'} />
		</View>
	)
}
export default ComponentScreen;
