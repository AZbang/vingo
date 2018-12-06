import React from 'react';
import {connect} from 'react-redux';
import {View, Panel} from '@vkontakte/vkui';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import VingoHeader from '../components/VingoHeader';
import AchievementItem from '../components/AchievementItem';

class AchievementsView extends React.Component {
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
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={3000}>
          <h1 className="label">Ваши достижения</h1>
        </ReactCSSTransitionGroup>
        <Grid fluid style={{background: 'linear-gradient(to right, #457fca, #5691c8)', paddingTop: 20}}>
          <Row>
            {this.getAchievementsList()}
          </Row>
        </Grid>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    achievements: state.data.achievements
  }
}

export default connect(mapStateToProps)(AchievementsView);
