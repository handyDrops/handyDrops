require('dotenv').config()
const express = require('express');
const phoneRoute = express.Router();
const {ensureLoggedIn} = require('connect-ensure-login')

var fonoapi = require('fonoapi-nodejs');
fonoapi.token = process.env.API_TOKEN;


phoneRoute.get('/',(req,res)=>{
  res.render('auth/moviles');
})

phoneRoute.post('/',(req,res)=>{
  const { brand, device} = req.body;
  fonoapi.getDevices((queryString, data)=>{
    res.render('auth/moviles',{data})
  }, device, brand);
})


function myCallback(queryString, data) {
  console.log(data)
}

module.exports = phoneRoute;
