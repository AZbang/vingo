import React from 'react';
import {Div} from '@vkontakte/vkui';
import styles from './MuseumsList.module.sass';
import MuseumItem from './MuseumItem';

export class MuseumsList extends React.Component {
  getMuseums = () => {
    return this.props.museums.map((museum) => (
      <MuseumItem key={museum.id} data={museum}/>
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
