import { StyleSheet } from 'react-native';
import { typhography, colors, commonStyles } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container
  },
  title: {
    ...typhography.header,
    ...commonStyles.mb10,
    color: colors.black
  },
  bodyText: {
    color: colors.blue
  }
});

export default styles;
