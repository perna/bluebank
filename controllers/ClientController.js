'use strict';

const Client = require('../models').Client;
const Account = require('../models').Account;
const iscpf = require('iscpf');

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

	if(!iscpf(req.body.cpf))
		res.status(500).json({error: 'cpf invalido'});

	Client.create({cpf: req.body.cpf})
		.then(function (newClient) {
        	res.status(200).json(newClient);
      	})
      	.catch(function (error){
        	res.status(500).json(error);
    });
};


exports.find = (req,res) => {
	Client.findById(req.params.id, { include: Account })
		.then(function (client) {
        	res.status(200).json(client);
      	})
      	.catch(function (error){
        	res.status(500).json(error);
    });
};