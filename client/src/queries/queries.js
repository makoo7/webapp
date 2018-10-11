import {gql} from 'apollo-boost';
const getStandardsQuery = gql`
{
  standards{
    class
  }
}
`
const getStandardQuery = gql`
{
  standards{
    class
    classteacher
  }
}
`
const AddStudentMutation = gql`
mutation($name:String!, $standard:String!){
    addStudent(name:$name,standard:$standard){
        name
        standard
    }
}
`
const getStandardDetailQuery = gql`
  query($id:String){
    standard(class: $id){
      classteacher
      students{
        name
        standard
      }
    }
  }
`
export {getStandardsQuery, getStandardQuery, AddStudentMutation, getStandardDetailQuery};