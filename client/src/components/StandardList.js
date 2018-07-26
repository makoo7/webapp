import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getStandardQuery = gql`
{
  standards{
    class
    classteacher
  }
}
`

class StandardList extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <ul className="standard-list">
            <li>Mitesh prajapati</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getStandardQuery)(StandardList);
