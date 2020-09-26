import React, {Component} from "react";
import {Text, View} from "react-native";
import {SupportBlue, SupportGreen, SupportOrange, SupportRed} from "../../styles/color-variables";
import {Icon, Input} from "react-native-elements";

type AlertType = 'success' | 'error' | 'info' | 'warning';

type AlertComponentProps = {
	text: string,
	type: AlertType
}

const typeToBackgroundColor = {
	success: SupportGreen,
	error: SupportRed,
	warning: SupportOrange,
	info: SupportBlue
}

export default function AlertComponent(props: AlertComponentProps) {

	// TODO: Add prop to override default alert component style
	const style = {
		flexDirection: 'row',
		backgroundColor: typeToBackgroundColor[props.type],
		padding: 10,
		alignItems: "center",
		borderRadius: 5
	};

	return (
		<View style={style}>
			<Icon style={{paddingRight: 15}} name={'facebook'}/>
			<Text style={{}}>{props.text}</Text>
		</View>
	);
}
