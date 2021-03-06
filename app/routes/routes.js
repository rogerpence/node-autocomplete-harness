
module.exports = function(app) {
    app.get('/api/states', (req, res) => {
        const states = require('../../json/states.json');
        
        const startsWith = req.query.startswith.toLowerCase();
        const result = [];

        for (var i = 0; i < states.length; i++) {            
            let stateName = states[i].text.toLowerCase();
            if (stateName.substring(0, startsWith.length) >= startsWith) {
                result.push(states[i]);                
            }                    
        }
        if (result.length === 0) {
            res.send({'text': 'No states found', 'value': ''});
        }
        else {            
            res.send(result);
        }            
    });

    app.get('/api/cities', (req, res) => {
        const cities = require('../../json/cities.json');
        const state = req.query.state;
        let result = [];

        for (var i = 0; i < cities.length; i++) {            
            if (cities[i].state === state) {
                for (var j = 0; j < cities[i].cities.length; j++) {            
                    result.push({"text": cities[i].cities[j], 
                                 "value": cities[i].state})
                }                    
                break;
            }
        }            
        res.send(result);
    });

    app.get('/api/city', (req, res) => {
        const cities = require('../../json/cities.json');
        const state = req.query.state;
        const startsWith = req.query.startswith.toLowerCase();        
        let result = [];

        for (var i = 0; i < cities.length; i++) {            
            if (cities[i].state === state) {
                for (var j = 0; j < cities[i].cities.length; j++) {   
                    let city = cities[i].cities[j].toLowerCase();                        
                    if (city.substring(0, startsWith.length) >= startsWith) {
                        result.push({"text": cities[i].cities[j], 
                                     "value": cities[i].state})
                    }                                                
                }                    
                break;
            }
        }            
        res.send(result);
    });
    
    
};
