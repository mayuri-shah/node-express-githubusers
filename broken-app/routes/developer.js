const express = require("express")
const router = new express.Router()
const axios = require('axios')
const ExpressError = require("../expressError.js")
const { response } = require("express")
let results = []

  router.post('/',async function(req, res, next) {
    
    try {
      let promises = req.body.developers.map( d => {
        return axios.get(`https://api.github.com/users/${d}`);
      });
      let results = await Promise.all(promises);
      let storeResultArr = results.map(r => ({ name: r.data.name, bio: r.data.bio }))

  
      return res.json(storeResultArr);
    } catch {
      next(err);
    }
  });
  
  module.exports = router;