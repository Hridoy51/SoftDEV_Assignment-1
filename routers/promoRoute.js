//for require express feature
const express = require('express');

//creating promo router.
const promo = express.Router();

//to get all promos info.
promo.get('/', (req, res) => {
    res.send('HERE are your promos');
});

//to post a new promo with name and description.
promo.post('/', (req, res) => {
    res.send(`A new promo is added with name ${req.body.name} with description ${req.body.description}`);
});

//to update a promo info.
promo.put('/', (req, res) => {
    //promo id is not given so it's not supported.
    res
    .status(403)
    .send(`Put request not supported on /promos/${req.params.id}`);
});


//to delete all of the promo info.
promo.delete('/', (req, res) => {
    res.send('Delete all of your promos');
});


//to get specific promo info with id provided
promo.get('/:id', (req, res) => {
    res.send(`Your promo with promo id ${req.params.id} is here`);
});


//to post a new promo info .
promo.post('/:id', (req, res) => {
    //a new promo should not have any id.
    res
    .status(403)
    .send(`Post request is not supported on /promos/${req.params.id}`);
});


//to update a specific promo info with name and description. 
promo.put('/:id', (req, res) => {
    res.send(`Your promo with id ${req.params.id} is updating with name ${req.body.name} and description ${req.body.description}`);
});

//to delete specific promo info with id.
promo.delete('/:id', (req, res) => {
    res.send(`Your promo with promo id${req.params.id} is deleted`);
});

//to send this module 
module.exports = promo;