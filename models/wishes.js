module.exports = function(sequelize, DataTypes) {
    var Wishes = sequelize.define("Wishes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        wishcntry: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 90]}
            },
        wishcenter: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 180]}
        },
        wishadmin: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]}
        },
        wishto: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]}
        },
        pkgtype: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]}
        },
        request_At: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: 20991231
        },
        carrier: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Nippon International"
        },
        shipped_At: {
            type: DataTypes.DATE,
            defaultValue: 0
        },
        delivery_At: {
            type: DataTypes.DATE,
            defaultValue: 0
        },
        wishtostatus: {
            type: DataTypes.STRING,
            defaultValue: "Active"
        },
        remarks: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "",
            validate: {
                len: [1, 200]}
        }
    });
    return Wishes;
};