/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import {
  View, Text, TouchableOpacity, BackHandler, Alert
} from 'react-native';
import PropTypes from 'prop-types';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';
import { authStore, commonStore } from '../../Stores';
import Loading from '../Loading';

const HeaderNavigation = ({ navigation, scene }) => {
  const isFocusedScreen = useIsFocused();
  const { token, onLogout } = authStore();
  const {
    onAdditionalHandler, setAdditionalHandler, isLoading, message, setMessage
  } = commonStore();

  const additionalBack = () => {
    onAdditionalHandler();
    setTimeout(() => {
      setAdditionalHandler(() => {});
    }, 3000);
  };

  const handleBackButtonClick = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      BackHandler.exitApp();
    }
    additionalBack();
    return true;
  };

  useEffect(() => {
    if (isFocusedScreen) {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    }
  }, [isFocusedScreen]);

  const showAlert = () => {
    Alert.alert(
      '',
      message,
      [
        { text: 'OK', onPress: () => setMessage(null) }
      ]
    );
  };

  useEffect(() => {
    if (message) {
      showAlert();
    }
  }, [message]);

  return (
    <>
      <Loading visible={isLoading} />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>Header</Text>
        </View>
        {token && (
        <TouchableOpacity
          style={styles.headerRight}
          onPress={onLogout}
        >
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
        )}
      </View>
    </>
  );
};

HeaderNavigation.propTypes = {
  navigation: PropTypes.object.isRequired,
  scene: PropTypes.object
};

HeaderNavigation.defaultProps = {
  scene: {}
};

export default HeaderNavigation;
