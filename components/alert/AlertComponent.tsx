import React, {Component} from "react";
import {Text, View, ViewStyle} from "react-native";
import {BrandWhite, SupportBlue, SupportGreen, SupportOrange, SupportRed} from "../../styles/color-variables";
import {Icon, Input} from "react-native-elements";

type AlertType = 'success' | 'error' | 'info' | 'warning';

type AlertComponentProps = {
	text: string,
	type?: AlertType
	style?: ViewStyle
}

const mapTypeToBackgroundColor = (type: AlertType): string => {
	let types = {
		success: SupportGreen,
		error: SupportRed,
		warning: SupportOrange,
		info: SupportBlue
	}
	return types[type];
}

// TODO: NOT FINISHED - THESE SHOULD BE WM SVG'S
const mapTypeToIcon = {
	success: 'info-circle',
	error: 'exclamation-triangle',
	warning: 'exclamation-triangle',
	info: 'info-circle'
}

export default function AlertComponent(props: AlertComponentProps) {

	const style = props.style ?? {
		flexDirection: 'row',
		backgroundColor: mapTypeToBackgroundColor(props.type ?? 'info'),
		padding: 10,
		alignItems: "center",
		borderRadius: 5,
		margin: 1
	};

	return (
		<View style={style}>
			<Icon color={'red'}
			      style={{paddingRight: 15}}
			      type='font-awesome'
			      name={mapTypeToIcon[props.type ?? 'info']}/>

			<Text style={{color: BrandWhite}}>{props.text}</Text>
		</View>
	);
}
