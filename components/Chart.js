import React from 'react';
import { NativeModules, View, Text, TouchableOpacity } from 'react-native';

const RNChart = NativeModules.Chart;

console.log(RNChart);

export default function Chart(props) {
  return (
    <View>
      <Text>Foo bar shibbyz</Text>
      <TouchableOpacity onPress={() => RNChart.increment()}>
        <Text>Increment me!</Text>
      </TouchableOpacity>
    </View>
  );
}
