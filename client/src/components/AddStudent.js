import React, { Component } from 'react';
import {graphql, compose } from 'react-apollo';
import {getStandardsQuery, AddStudentMutation} from '../queries/queries';

class AddStudent extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            standard:''
        };
    }

    displayStandard(){
        var data = this.props.getStandardsQuery;
        if (data.loading) {
            return (<option disabled>select</option>);
        } else {
            return data.standards.map(standard =>{
                return(<option value={standard.class} key={standard.class}>{ standard.class }</option>);
            });
        }
    }

    submitForm(e){
        e.preventDefault();
        this.props.AddStudentMutation({
            variables:{
                name:this.state.name,
                standard:this.state.standard
            },
            refetchQueries: [{ query: getStandardsQuery }]
        });
    }

    render(){
        return (
        <div className="student-class">    
            <form id="add-student" className="form" onSubmit={ this.submitForm.bind(this) }>
                {/* <div className="form-group">
                    <h3>Add Student</h3>
                </div> */}
                <div className="form-group">
                <label>Full Name: </label>
                    <input type="text" id="name" className="form-control" name="name" onChange={ (e) => this.setState({name: e.target.value}) } />  
                </div>
                <div className="form-group">
                <label>Select Standard: </label>
                    <select id="standard" name="standard" className="form-control" onChange={ (e) => this.setState({standard: e.target.value}) } >
                        <option value="">select</option>
                        {this.displayStandard()}
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                    <button type="reset">Clear</button>
                </div>
            </form>
        </div>
        );
    }
}

export default compose(
    graphql(getStandardsQuery,{ name:"getStandardsQuery" }),
    graphql(AddStudentMutation,{ name:"AddStudentMutation" })
) (AddStudent);