import React from 'react';
import { Button as ButtonNative, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({
  title, onPress, disabled
}) => (
  <View style={styles.button}>
    <ButtonNative
      title={title}
      onPress={onPress}
      disabled={disabled}
    />
  </View>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  title: 'Submit',
  disabled: false
};

export default Button;
