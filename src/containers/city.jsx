import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../actions';


class City extends Component {
  componentWillMount() {
  }

  render() {
    let classes = "cities";
    if (this.props.name === this.props.selectedCity) {
      classes += " selected_city";
    }
    return (
      <div className={classes} onClick={() => this.props.selectCity(this.props.name)}>
        <h6>{this.props.name}</h6>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    selectedCity: state.selectedCity
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(City);

