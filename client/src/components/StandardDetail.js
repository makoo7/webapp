import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getStandardDetailQuery} from '../queries/queries';

class StandardDetail extends Component{

  displayStandardDetail() {
    var data = this.props.data;
      const { standard } = data;
        if(standard){
          return(
            <div>
              <h3>Class Teacher Name: {standard.classteacher}</h3>
              <h5>Students list of { this.props.classId } Standard </h5>
              <ul className="standard-list">
                {
                  standard.students.map((item, index) => {
                    return <li key={index}><span>{item.name}</span></li>
                  })
                }
              </ul>
            </div>
          )
        }
  };

  render() {
    return (
      <div>
          <div className="standard-detail">
                <p>Standard Detail</p>
                { this.displayStandardDetail() }
          </div>
      </div>
    );
  }

}

export default graphql(getStandardDetailQuery,{
  options:(props) => {
    return {
      variables: {
        id: props.classId
      }
    }
  }
})(StandardDetail); 