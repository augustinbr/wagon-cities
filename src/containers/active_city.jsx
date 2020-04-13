import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../actions';

class ActiveCity extends Component {
  render() {
    return (
      <div>
        {this.props.cities.map((city) => {
          if (city.name === this.props.selectedCity) {
            return (
              <div className="active-city col-sm-7" key={city.name}>
                <h1>{city.name}</h1>
                <p>{city.address}</p>
                <img src={`https://kitt.lewagon.com/placeholder/cities/${city.slug}`} alt={city.name} />
              </div>);
          }
        })
        }
      </div>


    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
