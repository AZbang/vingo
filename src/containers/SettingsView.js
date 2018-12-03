import React from 'react';
import {connect} from 'react-redux';
import {View, Panel, Switch} from '@vkontakte/vkui';
import VingoHeader from '../components/VingoHeader';

class SettingsView extends React.Component {
  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <VingoHeader></VingoHeader>
        <h1 className="label" style={{marginTop: 20}}>Настройки</h1>
        <div>
          <h1 className="label" style={{marginTop: 40}}>УВЕДОМЛЕНИЯ</h1>
          <Switch defaultChecked style={{marginLeft: 0, float: 'right', marginTop: -50, marginRight: 10}}/>
        </div>
        <div>
          <h1 className="label" style={{marginTop: 10}}>ВИБРАЦИЯ</h1>
          <Switch defaultChecked style={{marginLeft: 0, float: 'right', marginTop: -50, marginRight: 10}}/>
        </div>
        <div>
          <h1 className="label" style={{marginTop: 10}}>ЗВУК</h1>
          <Switch defaultChecked style={{marginLeft: 0, float: 'right', marginTop: -50, marginRight: 10}}/>
        </div>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(SettingsView);
