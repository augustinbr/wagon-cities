import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCities } from '../actions';
import City from '../containers/city';

class CityList extends Component {
  componentWillMount() {
    console.log(this.props.cities[0]);
  }

  render() {
    return (
      <div className="col-sm-7">
        {this.props.cities.map(city =>
          (<City name={city.name} key={city.name} />))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CityList);
