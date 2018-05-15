module.exports = {
    port: 8082,
    graphqlEndpoint:'/graphql',
    graphiqlEndpoint:'/graphiql',
    db: {
        host: '172.17.0.4',
        database: 'users',
        user: 'users',
        password: 'users',
        dialect: 'mysql'
    }
};