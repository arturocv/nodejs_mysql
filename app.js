const express = require('express');
const morgan = require('morgan');




const app = express();
const cors = require("cors");


//Routes
// const userRoutes = require('./routers/userRoutes');
import userRoutes from './routers/userRoutes';


// Settings
app.set("port", 4000);


// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());


//Routes
app.use(userRoutes);

export default app;
