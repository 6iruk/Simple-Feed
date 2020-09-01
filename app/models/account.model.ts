import mongoose, { Schema, Document } from 'mongoose';

 // Account Entity
 //
const AccountSchema = new Schema(
  {
      uid: { type: String, unique: true},
      phoneNumber: { type: String, default: ""}
  }
  ,
  {timestamps: true},
);


 //@ Procedures


 // Create a new Account : JSON of new account
 //
AccountSchema.statics.createAccount = async function (account) {
  const document = new models.Account(account);
 
  await document.save();

  return document;
};


 // Get a single Account : ID of account to get
 //
AccountSchema.statics.getAccount = async function (uid) {
  const document = await this.findOne({ uid: uid});

  return document;
};


 // Account model handler
 //
const Account = mongoose.model('Account', AccountSchema);



export default Account;
