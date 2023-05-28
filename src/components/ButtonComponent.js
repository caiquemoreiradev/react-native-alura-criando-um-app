import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import TextComponent from './TextComponent';

export default function ButtonComponent({ text, onPress, style }) {

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <TextComponent style={styles.buttonText}>{text}</TextComponent>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
    marginTop: 10,
  },

  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});