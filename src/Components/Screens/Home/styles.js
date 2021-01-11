import { StyleSheet } from 'react-native';
import { typhography, colors } from '../../../Styles';

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    backgroundColor: colors.white,
    elevation: 24,
    borderRadius: 8,
    marginBottom: 15,
    padding: 10
  },
  title: {
    ...typhography.header,
    color: colors.black
  }
});

export default styles;
