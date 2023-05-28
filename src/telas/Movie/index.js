import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Header from './components/Header';
import Details from './components/Details';
import Item from './components/Item';
import TextComponent from '../../components/TextComponent';

export default function Home({ header, details, cast }) {
	return (
		<>

			<FlatList
				data={cast.list}
				renderItem={Item}
				keyExtractor={({ nome }) => nome}
				ListHeaderComponent={() => {
					return <>
						<Header {...header} />

						<View style={styles.main}>
							<Details {...details} />
							<TextComponent style={styles.title}>{cast.title}</TextComponent>
						</View>
					</>
				}} />
		</>
	)
}
const styles = StyleSheet.create({

	title: {
		color: "#464646",
		fontWeight: "bold",
		marginTop: 22,
		marginBottom: 8,
		fontSize: 20,
		lineHeight: 32,
	},

	main: {
		paddingVertical: 8,
		paddingHorizontal: 16,
	},

});