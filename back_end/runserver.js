const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const http=require('http')
const fs=require('fs')
mongoose.connect("mongodb://localhost:27017/20PW",{useNewUrlParser:true,

useUnifiedTopology:true})

const personSchema=mongoose.Schema({
    _id:Object,
    amount:Number,
    date:String,
    description:String,
    category:String,
    office_personal:String,
    month:String,
    year:String
})

const Transactions=mongoose.model("Transactions",personSchema)


const app=express()

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.use(express.static('public'))

var total=0
app.get("/",(req,res)=>{
    
    
    res.render('moneytable');
})
var db=mongoose.connection;
db.on('error',()=>console.log("error in connecting to database"))
db.once('open',()=>console.log("connected to database"))

app.post("/",(req,res)=>{
    
    let choice=req.body.choice
    console.log(choice)
    console.log(typeof(choice))
        const query={month:{$eq:choice}}
        db.collection("Transactions").find(query).toArray(function(err, result) {
    
        console.log(result)
        if(err){
            console.log(err)
        }
        else{

            var openingTable='<table>\
                              <tr>\
                              <th>ID</th>\
                              <th>Amount</th>\
                              <th>Date</th>\
                              <th>Description</th>\
                              <th>Category</th>\
                              <th>Office_Personal</th>\
                              <th>Month</th>\
                              <th>Year</th>\
                              </tr>'

            for(var i=0;i<result.length;i++)
            {   console.log(i)
                
            openingTable=openingTable+'<tr>\
                                        <td>'+result[i]._id+'</td>\
                                        <td id="red">'+result[i].amount+'</td>\
                                        <td>'+result[i].date+'</td>\
                                        <td>'+result[i].description+'</td>\
                                        <td>'+result[i].category+'</td>\
                                        <td>'+result[i].office_personal +'</td>\
                                        <td>'+result[i].month +'</td>\
                                        <td>'+result[i].year +'</td>\
                                        </tr>\
                                        '
                                 
                                                         
            }
         
           
            res.send({html:openingTable + '</table>'})    
           
           
                               
        }
    })
})

 

app.listen(3000)