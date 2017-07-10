import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import variables from 'style';
import { ViewContainer, Line } from 'components/common';
import WifiOnlySetting from './components/WifiOnlySetting';
import { changeWifiOnlySetting } from 'actions/settingActions';

@connect(
  state => ({
    settings: state.settings.data,
  }),
  { changeWifiOnlySetting }
)
class SettingsContainer extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    changeWifiOnlySetting: PropTypes.func.isRequired,
  }

  _onWifiOnlyChange = (value) => {
    this.props.changeWifiOnlySetting(value);
  };

  render() {
    const { wifiOnly } = this.props.settings;
    return (
      <ViewContainer style={{justifyContent: 'flex-start'}}>
        <WifiOnlySetting onSettingChange={this._onWifiOnlyChange} value={wifiOnly} />
        <Line height={1} width={variables.windowWidth} />
      </ViewContainer>
    );
  }
}
export default SettingsContainer;
