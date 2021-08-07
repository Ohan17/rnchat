/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';

import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const TextComponent = (props) => {
  const [count, setCount] = useState(0)
  const onTap = () => {
    setCount(count+1)
  }
  a
  return (
    <View style={props.style}>
      <Text style={styles.text}>
        Total Tap: {count}
      </Text>
      <TouchableOpacity onPress={onTap} style={styles.roundButton}>
        <Text>
          Tap
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const App = () => {
  return (
    <View>
      <TextComponent style={{alignItems: 'center'}}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
  },
  roundButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#384c75',
  },
});

export default App;
