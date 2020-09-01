import express from 'express';
import multer from 'multer';
import uploadImage from './helpers/helpers';
import {Post} from '../models/models,model';

 // Posts sub-route handler
const posts = express.Router();


 // Create a new post : Post details(POST)
 //
posts.post('/', function(req, res, next) {
  const myFile = req.file
  const imageUrl = await uploadImage(myFile)

  res.json(Post.createPost({"caption":req.body.caption, "image":imageUrl}))
})


 // Like a post : Post ID(URL/REGEX)
 //
posts.put('/like/:postID', function(req, res, next) {

  Post.likePost(req.params.postID);

  res.send("You have successfully liked this vibe");
});


 // Unlike a post : Post ID(URL/REGEX)
 //
posts.put('/unlike/:postID', function(req, res, next) {

  Post.unlikePost(req.params.postID);

  res.send("You have successfully unliked this vibe");
});


 // Get a post : Post ID(URL/REGEX)
 //
posts.get('/:postID', function(req, res, next) {

  res.json(Post.getPost(req.params.postID));
});


 // Get posts for feed : Page number(GET Query)
 //
posts.get('/', function(req, res, next) {

  res.json(Post.getfeedPosts(req.query.page));
});



export default posts;
