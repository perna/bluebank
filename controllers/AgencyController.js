'use strict';

const Agency = require('../models').Agency;
const zerofill = require('zerofill');

exports.list = (req, res) => {

    Agency.findAll()
    	.then((agency) => {
            res.status(200).json(agency);
        })
        .error(function(err){
            res.status(500).json({message: err.message});
    });

};


exports.create = (req,res) => {
	Agency.create({})
		.then(function (agency) {
          agency.number = zerofill(agency.id, 4);
          agency.save();
        	res.status(200).json(agency);
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