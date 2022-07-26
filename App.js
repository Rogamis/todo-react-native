import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import ListItem from './components/List';

export default function App() {
  const [list, setList] = useState([
    { text: "Hello user", key: '1' },
    { text: "This is Todo App", key: '2' },
  ]);

  const addHandler = (text) => {
    setList((mass) => {
      return [
        {text: text, key: mass.length+1},
        ...mass
      ]
    })
  }

  const deleteTask = (key) => {
    setList((mass)=> {
      return mass.filter(setList => setList.key != key)
  })
}

  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={list} renderItem={({ item }) => 
        <ListItem item={item} deleteTask={deleteTask} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
