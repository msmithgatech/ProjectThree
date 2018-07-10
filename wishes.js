module.exports = function(sequelize, DataTypes) {
    var wishes = sequelize.define("wishes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        wishfrom: {
            type: DataTypes.STRING,
            allowNull: false
  //          allowNull: false,
  //          validate: {
  //             len: [1]
  //          }
        },
        wishcenter: {
            type: DataTypes.STRING,
            allowNull: false
  //          allowNull: false,
  //          validate: {
  //              len: [1]
  //          }
        },
        wishto: {
            type: DataTypes.STRING,
            allowNull: false
  //          allowNull: false,
  //          validate: {
  //              len: [1]
  //          }
        },
        pkgtype: {
            type: DataTypes.STRING,
            allowNull: false
  //          allowNull: false,
  //          validate: {
  //              len: [1]
  //          }
        },
        requestdt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: 20991231
  //          allowNull: false,
  //          validate: {
  //              len: [1]
  //          }
        },
        carrier: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Nippon International"
  //          validate: {
  //              len: [1]
  //          }
        },
        shipdt: {
            type: DataTypes.DATE,
            allowNull: false
  //          allowNull: false,
  //          validate: {
  //              len: [1]
  //          }
        },
        wishtostatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        remarks: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ""
        }
    });
    return wishes;
};