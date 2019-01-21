import React from 'react';
import {View, Panel, Switch} from '@vkontakte/vkui';
import {AppHeader} from '../components';

class SettingsView extends React.Component {
  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <AppHeader/>
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

export default SettingsView;
