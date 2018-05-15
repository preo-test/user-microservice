import Sequelize from 'sequelize';
import config from '../config/config'

const sequelize = new Sequelize(config.db.database,config.db.user, config.db.password,{
    host: config.db.host,
    dialect: config.db.dialect,
    define: {
        underscored: true,
    },
});

//This kind of models let us extend our model with other entities as needed.
const models = {
    User: sequelize.import('./user')
};

//This block of code will help us once we have more than one table associated to microservice to enhance associations
/*Object.keys(models).forEach((modelName) =>{
    if ('associate' in models[modelName]){
        models[modelName].associate(models);
    }
});*/

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;