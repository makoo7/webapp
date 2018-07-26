const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

// mongoose.connect('mongodb://<username>:<password>@<connectionstring>',{useNewUrlParser: true});
mongoose.connect('mongodb://mak:test123123@ds243931.mlab.com:43931/graphql-mongo',{useNewUrlParser: true});

mongoose.connection.once('open',()=>{
    console.log('connection to mongoose successfully');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("4000 is connected.");
});