import express from 'express';
import {Profile} from '../models/models.model';

 // Accounts sub-routes handler
const accounts = express.Router();


 // Verify signed-in user then check if user profile exists
 // If TRUE return JSON of profile
 // Else create profile
 //
accounts.get('/verify', function(req, res, next) {
  let uid = req.user;

  var account = Account.getAccount(uid);

  if(!account) {Account.createAccount({ "uid": uid, "phoneNumber":req.body.phoneNumber})}
  else {res.json(Profile.getProfile(Account.getAccount(uid)))}
});


 // Notify user of successful logout action
 //
accounts.get('/logout', function(req, res, next) {

  res.send("You have successfully logged out from your account");
});



export default accounts;
