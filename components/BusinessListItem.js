import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function BusinessListItem(props) {
  const item = props?.business;
  const address = item?.location?.address;
  const city = item?.location?.city;
  const country = item?.location?.country;

  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <Text style={styles.name}>{item?.name}</Text>
      <View>
        <View>
          <Text>{address}</Text>
          <Text>
            {city}, {country}
          </Text>
        </View>
        <Text>{formatter.format(item.totalRev)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#eeeeee',
  },

  name: {
    fontSize: 24,
  },
});

BusinessListItem.defaultProps = {
  business: {},
  onPress: () => {},
};

BusinessListItem.propTypes = {
  buesiness: PropTypes.object,
  onPress: PropTypes.func,
};
