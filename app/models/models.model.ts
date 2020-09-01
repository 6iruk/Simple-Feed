import mongoose from 'mongoose';

import Profile from './profile.model';
import Post from './post.model';
import Account from './account.model';

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/simpleFeed");
}

const models = { Profile, Post };

export { connectDb };

export default models;
