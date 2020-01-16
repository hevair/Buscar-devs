const {Router} = require('express')
const axios = require('axios');
const Dev = require('../models/Dev');

const routes = Router();

routes.post('/devs', async function(req, res){
const {github_username, techs} = req.body;

const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`);

const {name = login,  avatar_url, bio} = apiresponse.data

const TechsArray = techs.split(',').map(tech => tech.trim());

const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: TechsArray,
})

console.log(name, avatar_url, bio)
    res.json(dev)
})

module.exports = routes