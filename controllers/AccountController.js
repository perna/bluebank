'use strict';

const Account = require('../models').Account;
const zerofill = require('zerofill');

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

    let data = {
        AgencyId: req.body.agency,
        client_id: req.body.client,
        balance: req.body.balance
    }; 

	Account.create(data)
		.then(function (account) {
            account.number = zerofill(account.id, 9);
            account.save();
        	res.status(200).json(account);
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


exports.doTransfer = (req, res) => {

};