import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getStandardQuery} from '../queries/queries';
import StandardDetail from './StandardDetail';

class StandardList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      selected:null
    }
  }
  // console.log(this.props);
  displayStandard() {
    var data = this.props.data;
    if (data.loading) {
      return (<div>loading please wait....</div>);
    } else {
      return data.standards.map(standard => {
        return (
          <li key={ standard.class } onClick={(e) => { this.setState({ selected: standard.class }) }}><span>Standard: { standard.class }</span> {/*<span>Classteacher: {standard.classteacher}</span>*/}</li>
        );
      });
    }
  };

  
  render() {
    return (
      <div>
        <h1>Standard List</h1>
        <ul className="standard-list">
        { this.displayStandard() }
        </ul>
        <StandardDetail classId={ this.state.selected } />
      </div>
    );
  }
}

export default graphql(getStandardQuery)(StandardList);
