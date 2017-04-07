var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt   = require('bcrypt');

var userSchema = new Schema({
    firstName   : { type: String, default : ''},
    lastName    : { type: String, default : ''},
    password    : { type: String, default : ''},
    email       : { type: String, default : ''},
    role        : { type: String, default : 'user'},
    wallets     : [
        { 
            type : mongoose.Schema.Types.ObjectId,
            ref  : 'Wallet'     
        }
    ],
    defaultCurrency    : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Currency'
    },
    created_at  : Date,
    updated_at  : Date
});

userSchema.pre('save', function(next){
    var user = this;
    if(this.isModified('password') || this.isNew){
        bcrypt.genSalt(10, function(err, salt){
            if(err){
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err){
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    }
    else
    {
        next();
    }
});

userSchema.methods.comparePassword = function(passw, cb){
    bcrypt.compare(passw, this.password, function(err, isMatch){
        if(err){
            return cb(err);
        }
        cb(null, isMatch);
    });
};

var User = mongoose.model('User', userSchema);


module.exports = User;