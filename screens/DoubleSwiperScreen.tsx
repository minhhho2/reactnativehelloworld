import React from "react";
import {View} from "react-native";
import {Text} from "react-native-elements";
import Swiper from 'react-native-swiper'
import {Dimensions, ScrollView, StyleSheet} from 'react-native';

export default function DoubleSwiperScreen() {
	return (
		<View>
			<Swiper style={styles.wrapper} showsButtons={true}>
				<View style={styles.slide1}>
					<Text style={styles.text}>Hello Swiper</Text>
				</View>
				<View style={styles.slide2}>
					<Text style={styles.text}>Beautiful</Text>
				</View>
				<View style={styles.slide3}>
					<Text style={styles.text}>And simple</Text>
				</View>
			</Swiper>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB'
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5'
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9'
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	}
})
