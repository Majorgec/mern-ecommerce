const express=require('express')
const env=require('dotenv');
const app=express();
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

//routes
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const categoryRoutes=require('./routes/routes-category');

//environment variables
env.config();


//mongoDB connection

mongoose.connect(
     `mongodb+srv://root:root123@cluster0.tfmm1.mongodb.net/Ecommerce?retryWrites=true&w=majority`,
     {
         useNewUrlParser:true,
         useUnifiedTopology:true
        
        }
        
).then(()=>{
    console.log('Database Connected');
}).catch((err)=>{
    console.log(err)
})


app.use(bodyParser.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
// app.get('/', (req,res,next)=>{
//     res.status(200).json({
//         message:'hello from the server'
//     });
// });

// app.post('/data', (req,res,next)=>{
//     res.status(200).json({
//         message:req.body
//     });
// });


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port:${process.env.PORT}`)
})