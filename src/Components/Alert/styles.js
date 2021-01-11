import { StyleSheet, Platform } from 'react-native';
import { typhography, colors, commonStyles } from '../../Styles';

const styles = StyleSheet.create({
  centeredView: {
  },
  containerBackgroud: {
    backgroundColor: colors.transBlue,
    flex: 1
  },
  containerAlert: {
    backgroundColor: colors.white,
    minHeight: 100,
    minWidth: 200
  }
});

export { styles, colors };
