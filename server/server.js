const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new spotifyWebApi({
        redirectUri= 'http:localhost:3000',
        clientId: '21745adf7c7b4647b0ef753c5dfe2f90',
        clientSecret: '9f4627091dec4305a03fdb89626e13be'
    })
    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
    res.json
    ({accessToken: data.body.access_token,
    refreshtoken: data.body.refresh_token,
    expiresIn: data.body.expires_in,
    })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)