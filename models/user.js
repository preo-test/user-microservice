export default (sequelize, DataTypes) => {
    const User = sequelize.define('user',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull:false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull:false
        },
        homeAddress: {
            type: DataTypes.STRING,
            allowNull:false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    });

    //TODO: Determine if the following block is needed or not since we not have any relational dependency inside the same microservice. For now, commented.
    /*User.associate = (models) =>{

    };*/
    return User;
};