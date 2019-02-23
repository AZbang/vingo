import React from 'react';
import {Div} from '@vkontakte/vkui';
import {inject, observer} from 'mobx-react';
import styles from './MuseumsList.module.sass';
import MuseumItem from './MuseumItem';

@inject('museums') @observer
class MuseumsList extends React.Component {
  getMuseums = () => {
    return this.props.museums.data.map((museum) => (
      <MuseumItem animation={this.props.museums.loading} key={museum.id} data={museum}/>
    ));
  }

  render() {
    return (
      <Div className={styles.list}>
        {this.getMuseums()}
      </Div>
    )
  }
}


export default MuseumsList;
