// https://oblador.github.io/react-native-vector-icons/

import React from 'react';
import { Image } from 'react-native';

import PropTypes from 'prop-types';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Icon({ type, ...restOfProps }) {
  switch (type) {
    case 'EvilIcons':
      return <EvilIcon {...restOfProps} />;
    case 'Feather':
      return <Feather {...restOfProps} />;
    case 'FontAwesome':
      return <FontAwesomeIcon {...restOfProps} />;
    case 'FontAwesome5':
      return <FontAwesome5Icon {...restOfProps} />;
    case 'Ionicons':
      return <Ionicon {...restOfProps} />;
    case 'Entypo':
      return <Entypo {...restOfProps} />;
    case 'MaterialIcons':
      return <MaterialIcons {...restOfProps} />;
    case 'AntDesign':
      return <AntDesign {...restOfProps} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...restOfProps} />;
    case 'Image':
      return <Image {...restOfProps} />;
    case 'Fontisto':
      return <Fontisto {...restOfProps} />;
    case 'Svg':
      return <SvgIcon {...restOfProps} />;
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
    'EvilIcons',
    'FontAwesome',
    'FontAwesome5',
    'Ionicons',
    'Entypo',
    'Image',
    'MaterialIcons',
    'Feather',
    'Fontisto',
    'AntDesign',
    'MaterialCommunityIcons',
    'Svg',
  ]),
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};
