var express = require('express'),
  app = express();

var Gun = require('gun');
var gun = Gun({
  file: 'data.json'
});

gun.wsp(app);
app.use(express.static(__dirname)).listen(9000);