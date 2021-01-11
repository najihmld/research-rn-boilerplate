import { StyleSheet } from 'react-native';
import { typhography, colors } from '../../Styles';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: colors.blue,
    paddingHorizontal: 15,
    justifyContent: 'center',
    elevation: 24
  },
  title: {
    ...typhography.header,
    color: colors.white
  },
  headerLeft: {},
  headerRight: {
    position: 'absolute',
    right: 20
  },
  textLogout: {
    ...typhography.body,
    color: colors.white
  }
});

export default styles;
