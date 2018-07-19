module.exports = function(sequelize, DataTypes) {
    var Wishes = sequelize.define("Wishes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        wishcenter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wishfrom: {
            type: DataTypes.STRING,
            allowNull: false
        },

        wishto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pkgtype: {
            type: DataTypes.STRING,
            allowNull: false
        },
        requestdt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: 20991231
        },
        carrier: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Nippon International"
        },
        shipdt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        wishtostatus: {
            type: DataTypes.STRING,
            defaultValue: true
        },
        remarks: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ""
        }
    });
    return Wishes;
};