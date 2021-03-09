import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { DateTime } from 'luxon';

import BusinessListItem from '../components/BusinessListItem';
import Icon from '../components/Icon';
import data from '../data.json';
import { useIsMounted } from '../lib/hooks';

const hydratedData = data.map((b) => {
  return {
    ...b,
    chartData: b.revenue.reduce(
      (obj, r) => {
        return {
          rev: [r.value, ...obj.rev],
          months: [DateTime.fromSQL(r.date).toFormat('LLL'), ...obj.months],
        };
      },
      { rev: [], months: [] },
    ),
    totalRev:
      Math.round(b.revenue.reduce((total, r) => total + r.value, 0) * 100) /
      100,
  };
});

export default function Businesses({ navigation, route }) {
  const listRef = useRef();
  const isMounted = useIsMounted();
  const [sortType, setSortType] = useState('alpha');
  const [alphaAsc, setAlphaAsc] = useState(false);
  const [revAsc, setRevAsc] = useState(false);
  const [sorted, setSorted] = useState(!isMounted ? alphaSort() : null);

  function renderItem({ item }) {
    return (
      <BusinessListItem
        business={item}
        onPress={() => navigation.navigate('Profile', { business: item })}
      />
    );
  }

  function alphaSort(dir) {
    return hydratedData.sort((a, b) => {
      if (a.name > b.name) return dir ? -1 : 1;
      if (a.name < b.name) return dir ? 1 : -1;
      return 0;
    });
  }

  function revSort(dir) {
    return hydratedData.sort((a, b) => {
      if (a.totalRev > b.totalRev) return dir ? -1 : 1;
      if (a.totalRev < b.totalRev) return dir ? 1 : -1;
      return 0;
    });
  }

  function onPressAlpha() {
    let newDir = alphaAsc;
    if (sortType === 'alpha') {
      newDir = !alphaAsc;
      setAlphaAsc(newDir);
    } else {
      setSortType('alpha');
    }
    listRef.current.scrollToOffset({ animated: true, offset: 0 });
    setSorted(alphaSort(newDir));
  }

  function onPressRev() {
    let newDir = revAsc;
    if (sortType === 'rev') {
      newDir = !revAsc;
      setRevAsc(newDir);
    } else {
      setSortType('rev');
    }
    listRef.current.scrollToOffset({ animated: true, offset: 0 });
    setSorted(revSort(newDir));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a Business</Text>
      <FlatList
        ref={listRef}
        data={sorted}
        style={styles.list}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortType == 'alpha' ? styles.selected : null,
          ]}
          onPress={onPressAlpha}>
          <Text>Alpha</Text>
          {sortType === 'alpha' && (
            <Icon
              type="MaterialCommunityIcons"
              name={alphaAsc ? 'sort-ascending' : 'sort-descending'}
              size={20}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortType == 'rev' ? styles.selected : null,
          ]}
          onPress={onPressRev}>
          <Text>$ Rev</Text>
          {sortType === 'rev' && (
            <Icon
              type="MaterialCommunityIcons"
              name={revAsc ? 'sort-ascending' : 'sort-descending'}
              size={20}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    flex: 1,
  },

  header: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
  },

  footer: {
    flexDirection: 'row',
  },

  sortButton: {
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selected: {
    backgroundColor: '#dddddd',
  },
});
