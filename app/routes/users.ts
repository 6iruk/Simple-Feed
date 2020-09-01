import express from 'express';
import {Profile} from '../models/models.model';

 //Users sub-route handler
var users = express.Router();


  // Get profile of signed-in user : Bearer Token
  //
users.get('/mine', function(req, res, next) {

  res.json(Profile.getProfile(req.user));
});


  // Get a profile : Post ID(URL/REGEX)
  //
users.get('/:userID', function(req, res, next) {

  res.json(Profile.getProfile(req.params.userID));
});



export default users;
