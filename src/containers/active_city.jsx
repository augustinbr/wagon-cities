import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../actions';

class ActiveCity extends Component {

  render() {
    const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`;
    return (
      <div className="active-city col-sm-7">
        <h1>{this.props.city.name}</h1>
        <p>{this.props.city.address}</p>
        <img src={src} alt={this.props.city.name} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    selectedCity: state.city
  };
}

export default connect(mapStateToProps)(ActiveCity);

