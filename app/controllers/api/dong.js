var express = require('express')
var db = require('../../models')

module.exports = function() {
  var router = express.Router()

  router.get('/', function(req, res, next) {
    db.Dong.findAll({
      include: [{
        model: db.Municipal,
        where: {
          name: req.query.municipal
        },
        include: [{
          model: db.Province,
          where: {
            name: req.query.province
          }
        }]
      }]
    })
    .then(function(dongs) {
      res.json(dongs)
    })
  })

  return router
}
