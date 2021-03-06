module.exports = function (sequelize, DataTypes) {

  var Cat2 = sequelize.define('Cat2', {
    title: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        Cat2.belongsTo(models.Cat1, {foreignKey: 'cat1Id'})
      }
    }
  })

  return Cat2
}
