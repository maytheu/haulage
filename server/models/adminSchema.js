const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const SALT_FACTORY = 10

require("dotenv").config;

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: 1,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,   
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: 1,
    maxLength: 14,
  },
});

//mongoose middleware to hash the password before saving it to the DB
adminSchema.pre('save', function(next){
    var admin = this
    //hash the password if its new or modified
    if(!admin.isModified('password')) return next()
    
    bcrypt.genSalt(SALT_FACTORY, function(err, salt){
        if(err) return next(err)

        //hasing the passsword with the salt
        bcrypt.hash(admin.password, salt, function(err, hash){
            if(err) return next(err)
            //assign the hash to the user
            admin.password = hash
            next()
        })
    })
} )
mongoose.model("admins", adminSchema);
