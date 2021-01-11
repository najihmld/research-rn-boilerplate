import { StyleSheet } from 'react-native';
import { typhography, colors, commonStyles } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container
  },
  title: {
    ...typhography.headerText,
    ...commonStyles.marginTitle,
    color: colors.blue
  },
  bodyText: {
    color: colors.blue
  }
});

export default styles;
