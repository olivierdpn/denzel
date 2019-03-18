const { GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQL
    

} = require('graphql');
const _ = require('lodash');
const ident = ["olivierdpn","Saisies73"];
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;


const CONNECTION_URL = "mongodb+srv://"+ident[0]+":"+ident[1]+"@cluster0-zaqom.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "Movies";

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("Movie");
});


//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,

            resolve: function () {
                return "Hello World";
            }
        },

        movie:{
            type:GraphQLObjectType,

            resolve: function(){
                collection.find({}).toArray((error, result) => {
                    return result;
                })
            }
        },
        
    }
});

exports.queryType = queryType;