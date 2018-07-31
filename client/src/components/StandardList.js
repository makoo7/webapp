import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getStandardQuery} from '../queries/queries';

class StandardList extends Component {
  
  // console.log(this.props);
  displayStandard() {
    var data = this.props.data;
    if (data.loading) {
      return (<div>loading please wait....</div>);
    } else {
      return data.standards.map(standard => {
        return (
          <li key={ standard.class }><span>Standard: { standard.class }</span> {/*<span>Classteacher: {standard.classteacher}</span>*/}</li>
        );
      });
    }
  };

  
  render() {
    return (
      <div>
        <ul className="standard-list">
        { this.displayStandard() }
        </ul>
      </div>
    );
  }
}

export default graphql(getStandardQuery)(StandardList);
