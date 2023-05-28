import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import TextComponent from "../../../components/TextComponent";
import topo from '../../../../assets/guardians.jpg';

const width = Dimensions.get('screen').width; //tamanho da tela com Dimensions (largura)

export default function Header() {

	return (
		<>
			<Image source={topo} style={styles.header} />
			<TextComponent style={styles.title}>{'Detalhes do filme'}</TextComponent>
		</>
	)
}

const styles = StyleSheet.create({

	header: {
		width: "100%",
		height: 578 / 768 * width,
	},

	title: {
		width: "100%",
		position: "absolute",
		textAlign: "center",
		fontSize: 20,
		lineHeight: 26,
		color: "white",
		fontWeight: "bold",
		padding: 16,
		marginTop: 16,
	},
})