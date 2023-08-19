var Area = require('./models/area');

// Obtains all areas
exports.getAreas = function(req, res) {
    Area.find({},function(err, areas) {
        if (err)
            res.send(err);
        res.json(areas);
    });
}

// Adds a new Area object to the database
exports.setArea = function(req, res) {
    Area.create( { Name        : req.body.Name,
                   Abreviation : req.body.Abreviation,
                   State       : req.body.State }, function(err, area) {
        if (err)
            res.send(err);
        
        Area.find(function(err, area) {
            if (err)
                res.send(err);
            res.json(area);
        });
    });
}

// Updates a database object
exports.updateArea = function(req, res) {
    Area.update( {_id: req.params.area_id},
        {$set: { Name        : req.body.Name,
                 Abreviation : req.body.Abreviation,
                 State       : req.body.State}}, function(err, area) {
        if (err)
            res.send(err);

        Area.find(function(err, area) {
            if (err)
                res.send(err);
            res.json(area);
        });
    });
}

// Deletes a database Area object
exports.removeArea = function(req, res) {
    Area.remove( {_id: req.params.area_id}, function(err, area) {
        if (err)
            res.send(err);

        Area.find(function(err, areas) {
            if (err)
                res.send(err);
            res.json(areas);
        });
    });
}