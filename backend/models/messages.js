'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Messages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.messages.belongsTo(models.users, {
                foreignKey: {
                    alllowNull: false
                }
            });
            models.messages.hasMany(models.comment);
        }
    };
    Messages.init({
        userId: DataTypes.INTEGER,
        postContent: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
        likes: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'messages',
    });
    return Messages;
};