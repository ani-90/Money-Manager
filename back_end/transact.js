const express=require('express')


var mongoose=require('mongoose')
const bodyParser = require('body-parser')
const app=express()
const PORT=4000

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/20PW',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


var db=mongoose.connection;
db.on('error',()=>console.log("error in connecting to database"))
db.once('open',()=>console.log("connected to database"))
app.post("/amount",(req,res)=>{

    var amount=req.body.amount
    var date=req.body.date
    var description=req.body.description
    var category=req.body.category
    var office_personal=req.body.office_personal
    var month=req.body.month
    var year=req.body.year
    

    
    
    var data={
       
       "amount":amount,
       "date":date,
       "description":description,
       "category":category,
       "office_personal":office_personal,
       "month":month,
       "year":year
    }

    db.collection('Transactions').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        
        console.log("Record Inserted Successfully")
        
    });

    return res.redirect('ui_index.html')
})

app.get("/",(req,res)=>{
   res.set({
       "Allow-access-Allow-Origin":"*"
   })
   
   return res.redirect('ui_index.html');
}).listen(PORT)



console.log("Listening on port",PORT)
