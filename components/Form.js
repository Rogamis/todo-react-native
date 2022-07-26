import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");
  const onChange = (text) => {
    setText(text);
  };
  return (
    <View>
      <TextInput styles={styles.input} onChangeText={onChange} placeholder="write todo"/>
      <TouchableOpacity styles={styles.button} onPress={() => { addHandler(text)}}>
        <Text styles={styles.text}> Add Task </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
  },
  text: {
    alignItems: "center",
  },
});