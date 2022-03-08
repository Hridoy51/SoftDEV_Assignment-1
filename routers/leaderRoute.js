//for require express feature
const express = require('express');

//creating leader router.
const leader = express.Router();

//to get all leaders info.
leader.get('/', (req, res) => {
    res.send('HERE are your leaders');
});

//to post a new leader with name and description.
leader.post('/', (req, res) => {
    res.send(`A new leader is added with name ${req.body.name} with description ${req.body.description}`);
});

//to update a leader info.
leader.put('/', (req, res) => {
    //leader id is not given so it's not supported.
    res
    .status(403)
    .send(`Put request not supported on /leaders/${req.params.id}`);
});


//to delete all of the leader info.
leader.delete('/', (req, res) => {
    res.send('Delete all of your leaders');
});


//to get specific leader info with id provided
leader.get('/:id', (req, res) => {
    res.send(`Your leader with leader id ${req.params.id} is here`);
});


//to post a new leader info .
leader.post('/:id', (req, res) => {
    //a new leader should not have any id.
    res
    .status(403)
    .send(`Post request is not supported on /leaders/${req.params.id}`);
});


//to update a specific leader info with name and description. 
leader.put('/:id', (req, res) => {
    res.send(`Your leader with id ${req.params.id} is updating with name ${req.body.name} and description ${req.body.description}`);
});

//to delete specific leader info with id.
leader.delete('/:id', (req, res) => {
    res.send(`Your leader with leader id ${req.params.id} is deleted`);
});

//to send this module 
module.exports = leader;