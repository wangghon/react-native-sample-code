import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import { CImageSwitch } from 'components/common';
import { settings as msg } from 'config/messages';
import styles from './styles';

class WifiOnlySetting extends Component {

  static propTypes = {
    onSettingChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    onSettingChange: () => {},
    value: false,
  }

  _switchValueChange = (value) => {
    this.props.onSettingChange(value);
  }

  render() {
    const { value } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.title}>{msg.wifiOnly.title}</Text>
          <Text style={styles.content}>{msg.wifiOnly.content}</Text>
        </View>
        <View style={styles.switchView}>
          <CImageSwitch onValueChange={this._switchValueChange} value={value} />
        </View>
      </View>
    );
  }
}

export default WifiOnlySetting;
