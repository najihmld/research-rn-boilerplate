import { Dimensions } from 'react-native';
import colors from './colors';
import * as typhography from './typography';

const commonStyles = {
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: colors.white
  },
  mb10: {
    marginBottom: 10
  },
  dimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
};

export { colors, typhography, commonStyles };
