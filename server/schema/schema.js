const graphql = require('graphql');
const _ = require('lodash');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLList 
} = graphql;

var students = [
    { id: '1', name: 'mitesh', standard: '10' },
    { id: '2', name: 'bhavesh', standard: '10' },
    { id: '3', name: 'robin', standard: '10' },
    { id: '4', name: 'mahendra', standard: '9' },
    { id: '5', name: 'suresh', standard: '9' },
    { id: '6', name: 'ravi', standard: '8' }
];

var standards = [
    { id:'1', class: '8', classteacher: 'hemali madam' },
    { id:'2', class: '9', classteacher: 'mayank sir' },
    { id:'3', class: '10', classteacher: 'fadric sir' }
];

const StudentType = new GraphQLObjectType({
    name: 'Student',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        standard: { type: GraphQLString },
        classteacher:{
            type:StandardType,
            resolve(parent,args){
                return _.find(standards,{ class: parent.standard });
            }
        }
    })
});

const StandardType = new GraphQLObjectType({
    name:'Standard',
    fields:() => ({
        id:{type:GraphQLID},
        class:{ type:GraphQLString },
        classteacher:{ type:GraphQLString },
        students:{
            type: new GraphQLList(StudentType),
            resolve(parent, args){
                return _.filter(students, { standard: parent.class});
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        student: {
            type: StudentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(students, { id: args.id });
            }
        },
        standard:{
            type:StandardType,
            args:{ class:{type: GraphQLID} },
            resolve(parent, args){
                return _.find(standards,{class: args.class});
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});