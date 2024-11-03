//create a simple server in express js

 const bodyParser = require('body-parser')
//const { json } = require('body-parser')
const express = require('express')
const { connect } = require('http2')
const app = express()
 const port = 3000
 //midlewares

 app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
 app.get('/', (req, res) => res.send('Hello World!'))
//post method
app.post("/contact",(req,res)=>{

    const {inputdat}= req.body;
    res.json({
        success:true,
        messsage:`welcome ${inputdat}`
    })
    
})
 app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const mongoose=require('mongoose')

const conectDb=async()=>{
    try{
        const conn=await mongoose.connect("")
    }
}