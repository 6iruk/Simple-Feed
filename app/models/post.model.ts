import mongoose, { Schema, Document } from 'mongoose';

 // Post Entity
 //
const PostSchema = new Schema(
  {
      likes: { type: Number, default: 0},
      caption: { type: String, default: ""},
      image: { type: String, default: ""},
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
      isLiked: { type: Bool, default: false}
  }
  ,
  {timestamps: true},
);


 //@ Procedures


 // Create a new Post : JSON of new post
 //
PostSchema.statics.createPost = async function (post) {
  const document = new models.Post(post);
 
  await document.save();

  return document;
};


 // Like a post : ID of post to like
 //
PostSchema.statics.likePost = async function (postID) {
  const document = await this.findOne({ __id: postID });

  var likes = document.likes;

  if(likes == 0) {this.where({ _id: postID }).update({ $set: { likes: likes + 1, isLiked: true}}).update().exec()}

  else {this.where({ _id: postID }).update({ $set: { likes: likes + 1}}).update().exec()}
};


 // Unlike a Post : ID of post to unlike
 //
PostSchema.statics.likePost = async function (postID) {
  const document = await this.findOne({ __id: postID });

  var likes = document.likes;

  if(likes == 1) {this.where({ _id: postID }).update({ $set: { likes: likes - 1, isLiked: false}}).update().exec()}

  else {this.where({ _id: postID }).update({ $set: { likes: likes - 1}}).update().exec()}
};


 // Get a single Post : ID of post to get
 //
PostSchema.statics.getPost = async function (postID) {
  const document = await this.findOne({ __id: postID });

  return document;
};


 // Get posts for feed : Page number
 //
PostSchema.statics.getfeedPosts = async function (page = 1) {
  const documents = await this.sort('createdOn').skip((page * 4) - 4).limit(4);
  var all = await this.find().count();
  var pages = 0;

  if(all%4 == 0) { pages = all/4 }

  else { pages = (all/4) + 1 }

  var feed = { "docs": documents, "total":all, "limit":4, "page": page, "pages":pages};

  return feed;
};

 // Post model handler
 //
const Posts = mongoose.model('Post', PostSchema);



export default Post;
