import React from "react";
import { View, Image, StyleSheet, } from "react-native";

import TextComponent from "../../../components/TextComponent";

export default function Item({ item: { name, image, character } }) {

	return (
		<View key={name} style={styles.Item}>
			<Image source={image} style={styles.image}></Image>
			<View>
				<TextComponent style={styles.name}> {name} </TextComponent>
				<TextComponent style={styles.character}> {character} </TextComponent>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

	Item: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#ECECEC",
		paddingVertical: 16,
		marginHorizontal: 16,
		alignItems: "center",
	},

	image: {
		width: 50,
		height: 50,

		borderRadius: 8,
		resizeMode: 'contain'
	},

	name: {
		fontSize: 16,
		lineHeight: 26,
		marginLeft: 11,
		color: "#464646",
	},

	character: {
		fontSize: 12,
		lineHeight: 26,
		marginLeft: 11,
		color: "#A3A3A3",
	}
});