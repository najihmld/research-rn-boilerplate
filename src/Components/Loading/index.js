import React from 'react';
import {
  Modal,
  ActivityIndicator,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { styles, colors } from './styles';

const Loading = ({ visible }) => (
  <View style={styles.centeredView}>
    <Modal
      animationType="none"
      transparent
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.containerBackgroud}>
        <View style={styles.containerLoader}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      </View>
    </Modal>
  </View>
);

Loading.propTypes = {
  visible: PropTypes.bool
};

Loading.defaultProps = {
  visible: false
};

export default Loading;
