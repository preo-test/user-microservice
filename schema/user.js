export default `
 type User{
    id: Int!
    name:String!
    lastname:String!
    phone:String!
    homeAddress: String!
    age:Int!
 },
 
 type Query{
    getUser(id:Int!): User!
    allUsers:[User!]!
 }
 
 type Mutation{
    createUser(id:Int!,name:String!,lastname:String!,phone:String!,homeAddress:String!, age:String!): User!
 }
 `;