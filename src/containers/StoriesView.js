import React from 'react';
import {connect} from 'react-redux';
import {View, Panel} from '@vkontakte/vkui';
import { Grid, Row, Col } from 'react-flexbox-grid';
import VingoHeader from '../components/VingoHeader';
import StoryPreview from '../components/StoryPreview';

class StoriesView extends React.Component {
  getStoriesList = () => {
    return this.props.completeItems.map((item, i) => (
      <Col key={i} xs={4} style={{height: 160, marginBottom: 20}}>
        <StoryPreview data={item}/>
      </Col>
    ));
  }

  render = () => (
    <View id={this.props.id} activePanel={this.props.id}>
      <Panel id={this.props.id}>
        <VingoHeader></VingoHeader>
        <h1 className="label">Сохраненные истории</h1>
        <Grid fluid>
          <Row>
            {this.getStoriesList()}
          </Row>
        </Grid>
      </Panel>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    completeItems: state.data.stories
  }
}

export default connect(mapStateToProps)(StoriesView);
