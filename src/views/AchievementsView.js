import React from 'react';
import {View, Panel} from '@vkontakte/vkui';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ErrorLoadingBlock from '../components/ErrorLoadingBlock';
import VingoHeader from '../components/VingoHeader';
import AchievementItem from '../components/AchievementItem';

class AchievementsView extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAchievements());
  }

  getAchievementsList = () => (
    this.props.achievements.map((item) => (
      <Col key={item.id} xs={3}>
        <AchievementItem data={item}/>
      </Col>
    ))
  )

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <VingoHeader></VingoHeader>
        <h1 className="label">Ваши достижения</h1>
        {this.props.error ?
          <ErrorLoadingBlock onReload={() => this.props.dispatch(fetchAchievements())}/> :
          (<Grid fluid style={{background: 'linear-gradient(to right, #457fca, #5691c8)', paddingTop: 20}}>
            <Row>
              {this.getAchievementsList()}
            </Row>
          </Grid>)
        }
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    error: state.ui.error,
    achievements: state.data.achievements
  }
}

export default connect(mapStateToProps)(AchievementsView);
