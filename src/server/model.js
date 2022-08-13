//make queries to mongodb
const Cube = require('./db.js');

var postRequestHappened = (object, callback) => {
  Cube.create(object, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  })
}

var getAll = (callback) => {
  Cube.find({}, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
}

module.exports = {
  getAll: getAll,
  postRequestHappened: postRequestHappened,
};
