const db = require('../database');

const car = {
  get: function(callback) {
    return db.query('select * from car order by idcar desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from car where idcar=?', [id], callback);
  },
  add: function(car, callback) {
    return db.query(
      'insert into car (name,author,isbn) values(?,?,?)',
      [car.brand, car.model, car.yearmodel, idcar],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from car where idcar=?', [id], callback);
  },
  update: function(id, car, callback) {
    return db.query(
      'update car set name=?,author=?, isbn=? where idcar=?',
      [car.brand, car.model, car.yearmodel, idcar],
      callback
    );
  }
};
module.exports = car;