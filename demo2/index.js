const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({'data':'data'})
})

app.listen(9015,()=>{console.log('sever open')})