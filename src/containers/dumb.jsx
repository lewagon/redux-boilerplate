import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateDumb } from '../actions';

class Dumb extends Component {
  handleClick = () => {
    this.props.updateDumb(`${this.props.dumb}!`);
  }

  render() {
    const style = { cursor: 'pointer' };
    return (
      <div onClick={this.handleClick} style={style}>
        {this.props.dumb}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { dumb: state.dumb };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateDumb }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dumb);
