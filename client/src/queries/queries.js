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
export {getStandardsQuery, getStandardQuery, AddStudentMutation};