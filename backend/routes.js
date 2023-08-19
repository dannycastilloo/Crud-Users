var Controller = require('./controller');
var mainDir = "";

module.exports = {
    principal: function(app) {
        // Obtain all areas
        app.get('api/areas', Controller.getAreas);

        // Create new area
        app.post('/api/areas', Controller.setArea);

        // Update area data
        app.put('/api/area/:area_id', Controller.updateArea);

        // Delete area
        app.delete('/api/area/:area_id', Controller.removeArea);

        // To principal application
        app.get('*', function(req,res) {
            res.sendFile( mainDir + '/angular/index.html' );
        });
    },
    start: function (mdir) {
        mainDir = mdir
    }
}