import React from 'react';
import {
  Modal,
  Button,
  View,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const Alert = ({ visible, message, setVisible }) => (
  <View style={styles.centeredView}>
    <Modal
      animationType="none"
      transparent
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.containerBackgroud}>
        <View style={styles.containerAlert}>
          <Text>{message}</Text>
          <Button title="Ok" onPress={setVisible} />
        </View>
      </View>
    </Modal>
  </View>
);

Alert.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.bool,
  message: PropTypes.string.isRequired
};

Alert.defaultProps = {
  visible: false,
  setVisible: () => {}
};

export default Alert;
