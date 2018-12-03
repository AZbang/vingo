import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './ChipPanel.css';

class ChipPanel extends React.Component {
  render() {
    let style = {};
    if(this.props.position === 'top') style.top = 10;
    else if(this.props.position === 'bottom') style.bottom = 10;

    return (
      <Grid className="chip-panel" fluid style={style}>
        <Row>
          <Col className="chip-panel__block" style={this.props.style} xs={this.props.size}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ChipPanel;
