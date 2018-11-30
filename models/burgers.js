const orm = require("../config/orm")


const burger = {
    getBurgers:function(cb){
        orm.getBurgers(function(res){
            cb(res);
        })
            // cb(res);
            
        
    },
    eat: function(id,cb){
        orm.eat(id,cb);
    },
    reviveBurger: function(cb){
orm.reviveBurger(cb)},

    create: function(name,cb){
        orm.create(name,cb);
    }

}
module.exports = burger 