module.exports = function (sequelize, DataTypes) {

  var Cat1 = sequelize.define('Cat1', {
    title: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function (models) {
      }
    }
  })

  return Cat1
}

