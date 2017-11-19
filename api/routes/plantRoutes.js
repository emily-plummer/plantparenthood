
module.exports = function(app) {
  var plants = require('../controllers/plantController');

  app.route('/plants')
    .get(plants.list_all_plants)
    .post(plants.create_a_plant);

  app.route('/plants/:plantId')
    .get(plants.read_a_plant)
    .put(plants.update_a_plant)
    .delete(plants.delete_a_plant);
};
