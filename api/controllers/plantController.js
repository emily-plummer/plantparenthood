var mongoose = require('mongoose');

Plant = mongoose.model('Plants');

exports.list_all_plants = function(req, res) {
  Plant.find({}, function(err, plant) {
    if (err) res.send(err);
    res.json(plant);
  });
};

exports.create_a_plant = function(req, res) {
  var new_plant = new Plant(req.body);
  new_plant.save(function(err, plant) {
    if (err) res.send(err);
    res.json(plant);
  });
};

exports.read_a_plant = function(req, res) {
   Plant.findById(req.params.plantId, function(err, plant) {
     if (err) res.send(err);
     res.json(plant);
   });
}

exports.update_a_plant = function(req,res) {
  Plant.findOneAndUpdate({_id: req.params.plantId}, req.body, {new: true},
    function(err, plant) {
      if (err) res.send(err);
      res.json(plant);
    }
  );
}
exports.delete_a_plant = function(req, res) {
  Plant.remove({
    _id: req.params.plantId
  }, function(err, plant) {
    if (err) res.send(err);
    res.json({ message: 'Plant successfully deleted'});
  })
}
