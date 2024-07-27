import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import JobController from './src/controllers/job.controller.js';
import UserController from './src/controllers/user.controller.js';
import {setLastVisit} from './src/middlewares/lastVisit.middleware.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
const app = express();
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key', // replace with your secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // set to true if using HTTPS
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('src/views'));
app.use(express.static('public'))
app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));
app.use(setLastVisit);

const jobController = new JobController
const userController = new UserController
app.get('/',jobController.getLandingPage);
app.get('/register',userController.getResgister);
app.post('/register',userController.postRegister);
app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);

app.get('/jobs',jobController.getAllJObs);
app.get('/postJobs',jobController.getPostJob)
app.get('/jobDetails',jobController.getJobDetails);
app.post('/postJobs',uploadFile.single('logo'),jobController.postJobData);
app.delete('/deleteJob',jobController.deleteJob);
app.get('/applyJob',jobController.applyJob);
app.get('/updateJob',jobController.getPostJob);
app.put('/updateJob',jobController.putUpdateJob);
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});