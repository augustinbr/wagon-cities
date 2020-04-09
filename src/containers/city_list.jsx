import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCities } from '../actions/index';
import City from '../containers/city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
    alert(this.props.cities[9]);
  }

  render() {
    return (

      <div className="col-sm-7">
        {this.props.cities.map(city =>
          (<City city={city} key={city.name} />))}
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

function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
