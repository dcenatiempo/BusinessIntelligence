// https://oblador.github.io/react-native-vector-icons/

import React from 'react';

import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function Icon({ type, ...restOfProps }) {
  switch (type) {
    case 'MaterialIcons':
      return <MaterialIcons {...restOfProps} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...restOfProps} />;
    case 'FontAwesome':
      return <FontAwesomeIcon {...restOfProps} />;
    default:
      return null;
  }
}

Icon.defaultProps = {
  type: 'FontAwesome',
  name: 'help',
  color: 'black',
  size: 24,
};

Icon.propTypes = {
  type: PropTypes.oneOf([
    'MaterialIcons',
    'MaterialCommunityIcons',
    'FontAwesome',
  ]),
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};
