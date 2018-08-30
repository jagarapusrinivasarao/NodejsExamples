var MongoClient = require('mongodb').MongoClient;
const username= 'test'
const password = 'sirisha@123'
var url = `mongodb://${username}:${password}@ds163698.mlab.com:63698/srinivas`;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});