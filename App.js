import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Checkout my app')

  function changeText(){
    const ogText = outputText;
    if (outputText === ogText) {
      setOutputText('New text')
    } else {
      setOutputText(ogText)
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>{ outputText }</Text>
      <Button title="click me" onPress={changeText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
