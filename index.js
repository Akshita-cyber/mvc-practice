const express = require('express')
const connectDB= require('./config/db.js')
const productRoutes= require('./routes/productRoutes.js')
const app = express()
const port = 4000

//connect to database
connectDB()

app.get('/', (req,res)=>{
    res.send('Hello World')
})


app.use('/api', productRoutes)// ->/api/products


app.listen(port,()=>{
    console.log(`Product app listening on port ${port}`);
    
})

