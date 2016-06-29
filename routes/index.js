/**
 * Created by Rain on 2016/6/29.
 */
var express = require('express');
var router = express.Router();
var bluebird = require('bluebird');
var fs = bluebird.promisifyAll(require('fs'));

var config = require('config');

router.get('/', (req, res)=> {
  var models = {};
  req.query.id ? models.id = req.query.id : null;

  fs.readdirAsync(config.get('resourcePath')).then((result)=> {
    models.videos = result;
    res.render('index', models);
  }).catch((err)=> {
    console.log(err);
  });
});

module.exports = router;