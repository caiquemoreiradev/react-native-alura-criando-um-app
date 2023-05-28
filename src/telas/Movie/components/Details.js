import React from "react";
import { View, Image, StyleSheet } from "react-native";

import TextComponent from '../../../components/TextComponent';
import ButtonComponent from '../../../components/ButtonComponent';

export default function Details({ name, companyLogo, companyName, description, button }) {

	return (
		<>
			<TextComponent style={styles.name}>{name}</TextComponent>

			<View style={styles.company}>

				<Image source={companyLogo} style={styles.companyLogo} />
				<TextComponent style={styles.companyName}>{companyName}</TextComponent>

			</View>

			<TextComponent style={styles.description}>{description}</TextComponent>

			<ButtonComponent text={'Quero assistir'} style={styles.botao} onPress={() => { }} />
		</>
	)
}

const styles = StyleSheet.create({

	name: {
		color: "#464646",
		fontSize: 26,
		lineHeight: 42, //distância vertical entre duas linhas
		fontWeight: "bold",
	},

	company: {
		flexDirection: "row",
		paddingVertical: 12,
	},

	companyLogo: {
		width: 32,
		height: 32,
	},

	companyName: {
		fontSize: 16,
		lineHeight: 26,
		marginLeft: 12,
	},

	description: {
		color: "#A3A3A3",
		fontSize: 16,
		lineHeight: 26,
	},

})