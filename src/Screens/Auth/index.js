/* eslint-disable no-console */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styles from './styles';
import { Input, Button } from '../../Components';
import { commonStore } from '../../Stores';
import fetchApi from '../../Utils/api-service';

const Auth = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const { isLoading } = commonStore();

  const onSubmit = (val) => {
    fetchApi('users/v1/auth/consumer/login', val).then((res) => {
      console.log('RES', res);
      const { token, userId } = res;
      navigation.navigate('Verify', { user: { token, userId } });
    }).catch(() => {});
  };

  console.log('LOADING', isLoading);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        label="Country Code"
        control={control}
        name="countryCode"
        keyboardType="numeric"
        rules={{ required: false }}
      />
      <Input
        label="Phone Number"
        control={control}
        name="phoneNumber"
        keyboardType="numeric"
        rules={{ required: false }}
      />
      <Button
        title="LOGIN"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

Auth.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Auth;
