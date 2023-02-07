var db_handler = require('./db_handler');
var bcrypt = require('bcrypt');
var util = require('util');
const { rmSync } = require('fs');

// authentication
async function checkHash(hash,password) {
    return await bcrypt
      .compare(password, hash)
      .then(res => {
        console.log(res) // return true
        return res;
      })
      .catch(err => console.error(err.message))        
}

async function valuser (req,res) {
    console.log(req.body);
    const qstrng = "select hashed_password from user_password where id = \'" + req.body.username + "\';";
    console.log(qstrng)
    const result = await db_handler.fetchquery(qstrng);
    console.log(result)
    if(result.rowCount){
        const isver = await checkHash(result.rows[0].hashed_password,req.body.password);
        res.send(isver);
        res.end();
    } else {
        res.send(false);
        res.end();
    }
}

module.exports = {valuser}