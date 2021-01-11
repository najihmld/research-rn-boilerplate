import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import styles from './styles';

const Input = ({
  name,
  rules,
  keyboardType,
  secureTextEntry,
  placeholder,
  control,
  defaultValue,
  label
}) => (
  <Controller
    control={control}
    render={({ onChange, onBlur, value }) => (
      <View style={styles.container}>
        <Text style={styles.styles}>{label}</Text>
        <TextInput
          onChangeText={onChange}
          keyboardType={keyboardType}
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
          style={styles.textInput}
        />
      </View>
    )}
    name={name}
    rules={rules}
    defaultValue={defaultValue}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  rules: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string
};

Input.defaultProps = {
  keyboardType: 'default',
  defaultValue: null,
  secureTextEntry: false,
  placeholder: null,
  label: ''
};

export default Input;
