'use strict';

const Client = require('../models').Client;

exports.list = (req, res) => {

    Client.findAll()
    	.then((clients) => {
            res.status(200).json(clients);
        })
        .error(function(err){
            res.status(500).json({message: err.message});
    });

};


exports.create = (req,res) => {
	Client.create({cpf: req.body.cpf})
		.then(function (newClient) {
        	res.status(200).json(newClient);
      	})
      	.catch(function (error){
        	res.status(500).json(error);
    });
};


exports.find = (req,res) => {
	Client.findById(req.params.id)
		.then(function (client) {
        	res.status(200).json(client);
      	})
      	.catch(function (error){
        	res.status(500).json(error);
    });
};


exports.findByAccount = (req, res) => {
	Client.findOne({ where: { number: req.body.number, agency_id: req.body.agency_id} })
		.then(function(client) {
 			console.log(client)
    		console.log(person.name)
  	});
};