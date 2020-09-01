import express from 'express';
import multer from 'multer';
import admin from 'firebase-admin';

import accountsRouter from './routes/accounts';
import postsRouter from './routes/posts';
import usersRouter from './routes/users';

const app = express();

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
})

app.use(multerMid.single('file'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next){
  console.log("A request for things received at " + Date.now());
  next();
});

app.use(function(req, res, next) {

  admin.initialize({credential: path.join(__dirname, '/config/real-service-account-file.json')});
  admin.auth().verifyIdToken(idToken)
   .then(function(decodedToken) {
      req.user = decodedToken.uid;
      next();
   }).catch(function(error) {
      res.send("Invalid token.")
   });

});

app.use('/v1/accounts', accountsRouter);
app.use('/v1/posts', postsRouter);
app.use('/v1/users', usersRouter);

module.exports = app;
