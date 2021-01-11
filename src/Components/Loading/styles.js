import { StyleSheet, Platform } from 'react-native';
import { typhography, colors, commonStyles } from '../../Styles';

const halfHeight = (commonStyles.dimensions.height / 2) - 30;

const styles = StyleSheet.create({
  centeredView: {
  },
  containerBackgroud: {
    backgroundColor: colors.transBlue,
    flex: 1
  },
  containerLoader: {
    zIndex: 2,
    backgroundColor: colors.white,
    padding: 11,
    paddingLeft: (Platform.OS === 'ios' ? 14 : 11),
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: halfHeight,
    borderRadius: 50,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export { styles, colors };
