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
        //console.log(this.state);
        this.props.AddStudentMutation({
            variables:{
                name:this.state.name,
                standard:this.state.standard
            }
        });
    }

    render(){
        return (
        <form id="add-student" onSubmit={ this.submitForm.bind(this) }>
            <div className="field">
            <label>Full Name: </label>
                <input type="text" id="name" name="name" onChange={ (e) => this.setState({name: e.target.value}) } />  
            </div>
            <div className="field">
            <label>Select Standard: </label>
                <select id="standard" name="standard" onChange={ (e) => this.setState({standard: e.target.value}) } >
                    <option value="">select</option>
                    {this.displayStandard()}
                </select>
            </div>
            <div className="field">
                <button>Submit</button>
            </div>
        </form>
        );
    }
}

export default compose(
    graphql(getStandardsQuery,{ name:"getStandardsQuery" }),
    graphql(AddStudentMutation,{ name:"AddStudentMutation" })
) (AddStudent);