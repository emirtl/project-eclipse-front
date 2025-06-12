const express=require('express')
const app=express()

app.use(express.static(__dirname + '../dist/eclipse'))
app.get('/*',(req,res)=>{
  res.sendFile('../dist/eclipse/browser/index.html')
})

app.listen(process.env.PORT || 8080)
