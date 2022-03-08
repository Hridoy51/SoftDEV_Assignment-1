//for require express feature
const express = require('express');

//creating dish router.
const dish = express.Router();

//to get all dishes info.
dish.get('/', (req, res) => {
    res.send('HERE are your dishes');
});

//to post a new dish with name and description.
dish.post('/', (req, res) => {
    res.send(`A new dish is added with name ${req.body.name} with description ${req.body.description}`);
});

//to update a dish info.
dish.put('/', (req, res) => {
    //dish id is not given so it's not supported.
    res
    .status(403)
    .send(`Put request not supported on /dishes/${req.params.id}`);
});


//to delete all of the dish info.
dish.delete('/', (req, res) => {
    res.send('Delete all of your dishes');
});


//to get specific dish info with id provided
dish.get('/:id', (req, res) => {
    res.send(`Your dish with dish id ${req.params.id} is here`);
});


//to post a new dish info .
dish.post('/:id', (req, res) => {
    //a new dish should not have any id.
    res
    .status(403)
    .send(`Post request is not supported on /dishes/${req.params.id}`);
});


//to update a specific dish info with name and description. 
dish.put('/:id', (req, res) => {
    res.send(`Your dish with id ${req.params.id} is updating with name ${req.body.name} and description ${req.body.description}`);
});

//to delete specific dish info with id.
dish.delete('/:id', (req, res) => {
    res.send(`Your dish with dish id ${req.params.id} is deleted`);
});

//to send this module 
module.exports = dish;