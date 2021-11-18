'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.comment.belongsTo(models.users, {
                foreignKey: {
                    alllowNull: false
                }
            });
            models.comment.belongsTo(models.messages, {
                foreignKey: {
                    alllowNull: false
                }
            });
        }
    };
    comment.init({
        userId: DataTypes.INTEGER,
        messageId: DataTypes.INTEGER,
        comment: DataTypes.STRING,
        imageUrl: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'comment',
    });
    return comment;
};