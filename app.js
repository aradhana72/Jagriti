require('dotenv').config();
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const dotenv= require("dotenv");
const morgan=require("morgan");
const app=express();
const ejs=require("ejs");
const path=require("path");
const https=require("https");
const connectDB = require('./server/database/connection.js');

dotenv.config({path: 'config.env'})
const PORT=process.env.PORT ||8080;


connectDB();

app.set('view engine', 'ejs');
app.set('views', 'public');
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.json());
app.use(express.static("public"));

//load routers
app.use('/',require("./server/routes/router"))


//newsletter
app.post("/signup",function(req,res){
const firstName=req.body.firstname;
const lastName=req.body.lastname;
const email=req.body.email;
const data={
	members:[
	{
		email_address: email,
		status: "subscribed",
		merge_fields:{
			FNAME:firstName,
			LNAME:lastName
		}

	}
	]
};
const jsonData=JSON.stringify(data);
const key=process.env.API_KEY;
const url="https://us1.api.mailchimp.com/3.0/lists/"+key;
const list=process.env.LIST_KEY;
const options={
	method: "POST",
	auth: "adhi1:"+list

}

const request=https.request(url,options,function(response){
  if(response.statusCode===200)
  	res.redirect('/success');
  else
  	res.redirect("/failure");

  response.on("data",function(data){
  	console.log(JSON.parse(data));
  })
})
   request.write(jsonData);
   request.end();
});

//newsletter

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});