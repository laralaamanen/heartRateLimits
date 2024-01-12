import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculate = () => {
    if (age !== '' && !isNaN(age)) {
      const ageNumber = parseFloat(age);
      const lower = Math.round((220 - ageNumber) * 0.65);
      const upper = Math.round((220 - ageNumber) * 0.85);
      setLimits(`Limits ${lower} - ${upper}`);
    } else {
      setLimits('Invalid age');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Age</Text>
      <TextInput style={styles.input} value={age} onChangeText={(text) => setAge(text)}
      keyboardType='decimal-pad'
      />
      <Text style={styles.result}>{limits}</Text>
      <Button onPress={calculate} title="Calculate"/>
    </View>
  );
}

// I was working with my iPhone so the UI does not look similar for me as on the example. I hope this is still acceptable. 
// For example if I would took placing out of the center, it will be up on the screen and I am not able to read the first line "Age"
// and I know that I can just change the margins but for me it just looks better on the middle of the screen.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  result: {
    fontSize: 16,
    marginTop: 10,
  },
});
