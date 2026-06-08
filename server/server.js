require("dotenv").config();

const express = require('express')
const cors = require('cors') //cr-1
const app = express()

const authRoute = require('./router/auth-router') //auth-router js import kiya 
const contactRoute = require("./router/contact-router")
const serviceRoute = require("./router/service-router") // Service -5

const connectDb = require('./utils/db');

const errorMiddleware = require("./middlewares/error-middleware");


// handling cors /
// const corsOptions = {
//   origin: 'http://localhost:5173',
//   methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
//   credentials: true,
// }//cr-2
// app.use(cors(corsOptions));//cr-3

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://mern-course-website.vercel.app'
  ],
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  credentials: true,
};
app.use(cors(corsOptions))

app.use(express.json()) //middleware hai ye 

app.use("/api/auth", authRoute); //ab /auth-router use kar rahi hu ye bata raha hai 
app.use("/api/form", contactRoute); //ab /contact-router use kar rahi hu ye bata raha hai 
app.use("/api/data", serviceRoute); // Service -4

app.use(errorMiddleware) // hamesha end main add karna hai db connection ke pehele errorMiddleware use karna hai toh

// const PORT = 5000; //port number set kiya hai ya toh env file se lega ya 5000 lega
const PORT = process.env.PORT || 5000;
connectDb().then(()=>{
    app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`)
  })
})
