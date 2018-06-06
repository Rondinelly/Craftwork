const level = require("level");

module.exports = function (databaseDir, key, callback) {
    let db = level(databaseDir);
  
	db.get(key, function (err, value){	  
		db.close(function (error) {
			callback(err || error, value);
		});	 
  });  
}
