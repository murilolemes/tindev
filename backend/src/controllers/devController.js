const axios = require('axios');
const dev = require('../models/dev');

module.exports = {
    async store(req , res) {
        
        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`)
        
        const { name , bio , avatar_url: avatar } = response.data;

        const Dev = await dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(Dev);
    }
};