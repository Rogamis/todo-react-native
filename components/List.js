import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default function ListItem({item, deleteTask}) {
  return ( 
    <TouchableHighlight onPress={()=> deleteTask(item.key)}>
        <Text style={styles.text}>{item.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: "#fafafa",
        borderWidth: 2,
        marginTop: 20,
        width: '50%',
        marginLeft: "25%"
    }
});
