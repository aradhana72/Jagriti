const mongoose=require("mongoose");

var schema= new mongoose.Schema({
	caseNumber: {
		type: String
	} ,
name:{
 	type: String
 },
 Profession:{
 	type: String
 	//default: Date.now
 },
 Story:{
 	type: String
 }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;