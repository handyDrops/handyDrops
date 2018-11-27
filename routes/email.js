const express = require('express');
const emailRoute  = express.Router();

const transporter = require('../mail/transporter');

emailRoute.post('/',(req,res)=>{
  transporter.sendMail({
    from: '<nfake6162@gmail.com>',
    to: email, 
    subject: 'Consulta tarifas', 
    text: msg,
  })
  .then(info => res.redirect('/'))
  .catch(error => console.log(error));
})

module.exports = emailRoute;