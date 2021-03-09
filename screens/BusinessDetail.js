import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Chart from '../components/Chart';

export default function BusinessDetail({ navigation }) {
  const business = navigation.getParam('business');

  const { rev, months } = business.chartData;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{business.name}</Text>
      <Chart data={rev} labels={months} style={styles.chart} fontSize={14} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },

  header: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
  },

  chart: {
    flex: 1,
  },
});
