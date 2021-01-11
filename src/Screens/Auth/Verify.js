/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styles from './styles';
import { authStore, commonStore } from '../../Stores';
import { Input, Button } from '../../Components';
import fetchApi from '../../Utils/api-service';

const Verify = ({ navigation, route }) => {
  const { setToken } = authStore();
  const { setAdditionalHandler } = commonStore();
  const { control, handleSubmit } = useForm();

  const { user } = route.params;

  const onSubmit = (val) => {
    fetchApi('users/v1/auth/verify/login', {
      ...user,
      ...val
    }).then((res) => {
      setToken(res.token);
    }).catch(() => {});
  };

  // let count = 0;
  // const onDetail = () => {
  //   const interval = setInterval(() => {
  //     count += 1;
  //     console.log('COUNT', count);
  //     if (count === 5) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  //   setAdditionalHandler(() => clearInterval(interval));
  // };

  // useEffect(() => {
  //   onDetail();
  //   // return () => clearInterval(interval);
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify</Text>
      <Input
        label="OTP"
        control={control}
        name="otp"
        keyboardType="numeric"
        rules={{ required: false }}
      />
      <Button
        title="Verify"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

Verify.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Verify;
