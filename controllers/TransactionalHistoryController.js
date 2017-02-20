'use strict';

const Transactional = require('../models').Transactional_History;
const Account = require('../models').Account;
const Client = require('../models').Client;


exports.listByUser = (req, res) => {
	

	Client.findById(req.params.id, { include: Account })
		.then(function (client) {
			Transactional.findAll({where: {account_emmiter: client.Accounts[0].number}})
				.then(function(transactions) {
					res.status(200).json(transactions);		
				})
      	})
      	.catch(function (error){
        	res.status(500).json(error);
    });

};