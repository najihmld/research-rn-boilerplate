import { StyleSheet } from 'react-native';
import { typhography, colors } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10
  },
  label: {
    ...typhography.label,
    color: colors.black
  },
  textInput: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 6
  }
});

export default styles;
