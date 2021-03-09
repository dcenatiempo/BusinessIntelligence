import React from 'react';
import {
  requireNativeComponent,
  ViewPropTypes,
  StyleSheet,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
// import colorString from 'color-string';

const { height, width } = Dimensions.get('screen');

const RNChartView = requireNativeComponent('ChartView');

export default function Chart(props) {
  // const [barColor, setBarColor] = useState(normalizeColor(props.barColor));
  // const [fontColor, setFontColor] = useState(normalizeColor(props.fontColor));

  // useEffect(() => {
  //   setBarColor(normalizeColor(props.barColor));
  // }, [props.barColor]);

  // useEffect(() => {
  //   setFontColor(normalizeColor(props.fontColor));
  // }, [props.fontColor]);

  // function normalizeColor(string) {
  //   if (!string) return null;
  //   const array = colorString.get.rgb(string);
  //   return colorString.to.hex(array);
  // }

  return (
    <RNChartView
      style={[styles.default, props.style]}
      data={props.data}
      labels={props.labels}
      onLoaded={console.log}
      fontSize={props.fontSize}
      // barColor={barColor}
      // fontColor={fontColor}
    />
  );
}

Chart.defaultProps = {
  style: {},
  fontSize: 12,
  data: [],
  labels: [],
};

Chart.propTypes = {
  style: ViewPropTypes.style,
  fontSize: PropTypes.number,
  // barColor: PropTypes.string,
  // fontColor: PropTypes.string,
  data: PropTypes.array,
  labels: PropTypes.array,
};

const styles = StyleSheet.create({
  default: {
    height: width,
  },
});
