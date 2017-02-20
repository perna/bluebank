'use strict';

const Account = require('../models').Account;
const Client = require('../models').Client;
const Agency = require('../models').Agency;
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


//TODO - Criar métodos de validação separados do controller

exports.doTransfer = (req, res) => {

    let emmiter_id = parseInt(req.body.emmiter);
    let receiving_agency = req.body.agency;
    let receiving_account = req.body.account;
    let value = parseFloat(req.body.value);
    let message = '';

    Account.findOne({ where: {number: receiving_account}})
        .then(function(account){
            Client.findById(emmiter_id, {include: Account})
                .then(function(emmiter){
                        console.log(emmiter);
                        Account.findOne({ where: {number: emmiter.Accounts[0].number}})
                            .then(function(emmiterAccount) {
                                let balance =  parseFloat(emmiterAccount.balance); 
                                if(balance < value) {
                                    message = "Saudo insuficiente para transfêrencia";
                                    res.status(500).json({message: message});
                                } else {
                                    account.balance = parseFloat(account.balance) + value;
                                    emmiterAccount.balance = parseFloat(emmiterAccount.balance) - value;
                                    account.save();
                                    emmiterAccount.save();
                                    message = 'transfêrencia efetuada com  sucesso';
                                    res.status(200).json({message: message});
                                }            
                            })  
                            .catch(function (error){
                                res.status(500).json(error);
                        });
                })         
                .catch(function (error){
                                res.status(500).json(error); 
                })                      
        })
        .catch(function (error){
            message = "Conta inexistente"
            res.status(500).json({message: message});
        });    
};