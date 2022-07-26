import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
  <View style={styles.main}>
        <Text style={styles.text}>Todo app</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    }
});
