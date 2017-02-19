'use strict';

const Account = require('../models').Account;

exports.list = (req, res) => {

    Account.findAll()
    	.then((account) => {
            res.status(200).json(account);
        })
        .error(function(err){
            res.status(500).json({message: err.message});
    });

};


exports.create = (req,res) => {
	Account.create({cpf: req.body.cpf})
		.then(function (newClient) {
        	res.status(200).json(newClient);
      	})
      	.catch(function (error){
        	res.status(500).json(error);
    });
};


exports.findByNumber = (req,res) => {
    Account.create({cpf: req.body.cpf})
        .then(function (newClient) {
            res.status(200).json(newClient);
        })
        .catch(function (error){
            res.status(500).json(error);
    });
};