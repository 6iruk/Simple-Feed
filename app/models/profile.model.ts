import mongoose, { Schema, Document } from 'mongoose';

 //Profile Entity
 //
const ProfileSchema = new Schema(
  {
      posts: { type: Number, default: 0},
      followers: { type: Number, default: 0},
      followings: { type: Number, default: 0},
      account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
      username: { type: String, unique: true},
      name: { type: String, required: true },
      profilePic: { type: String, default: ""},
      bio: { type: String, default: ""},
      __v: { type: Number}
  }
  ,
  {timestamps: true},
);


  //@ Procedures


  // Create new profile : JSON of new profile
  //
PostSchema.statics.createProfile = async function (profile) {
  const document = new models.Post(profile);

  await document.save();

  return document;
};


 // Get user profile : Account Instance of User
 //
PostSchema.statics.getProfile = async function (account) {
  const document = await this.findOne({ account: account });

  return document;
};

 // Profile model handler
 //
const Profile = mongoose.model('Profile', ProfileSchema);



export default Profile;