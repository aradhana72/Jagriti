const express=require("express");
const route=express.Router()


const services=require("../services/render");
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);
route.get('/view', services.viewCase);
route.get('/add', services.addCase);
route.get('/contact', services.contactUs);
route.get('/signup',services.signUp);
route.get('/success',services.Success);
route.get('/failure',services.Failure);
route.get('/hackathon',services.hackathon);
route.get('/scholarship',services.scholarship);
route.get('/stats',services.stats);
route.get('/donate',services.donate);




// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);










module.exports=route