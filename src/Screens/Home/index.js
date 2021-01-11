import React from 'react';
import {
  View, Text, Button, ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { authStore } from '../../Stores';
import styles from './styles';
import Card from '../../Components/Screens/Home/Card';

const Home = ({ navigation }) => {
  const { token } = authStore();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Home;
