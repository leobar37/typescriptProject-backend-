//modules
import express from 'express';
import morgan from 'morgan';
import path from 'path'
const app =  express();

//imports
import indexRoute from './routes/index'
 

//public static images

 app.use('/uploads',express.static( path.resolve('uploads')));
 app.use(express.json());

//settings
app.set('port' , process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));


//routes
app.use('/api', indexRoute);



export default app; 