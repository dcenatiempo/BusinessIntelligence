import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Chart from '../components/Chart';

const { height, width } = Dimensions.get('screen');

export default function BusinessDetail({ navigation }) {
  const business = navigation.getParam('business');

  const { rev, months } = business.chartData;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{business.name}</Text>
      <Chart
        data={rev}
        labels={months}
        style={{
          height: height - 140,
        }}
        fontSize={12}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
  },
});
