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
  console.log(req.body)
  fonoapi.getDevices((queryString, data)=>{
    res.render('auth/moviles',{data})
  }, device, brand);
})



// get devices w/ brand
// fonoapi.getDevices(myCallback, 'iphone', 'apple');
// get devices w/o brand
// fonoapi.getDevices(myCallback, 'iphone 6S');

// get latest devices from apple (limit result to 5)
// fonoapi.getLatest(myCallback, 5, 'apple');

function myCallback(queryString, data) {
  console.log(data)
}

module.exports = phoneRoute;
