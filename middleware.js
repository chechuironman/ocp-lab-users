let jwt = require('jsonwebtoken');
const config = require('./config/keys');

let checkToken = (req, res, next) => {
    
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token) {
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        
        token = token.slice(7, token.length);
    }
    }   
  
    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          if(req.decoded.name!="admin@chechu.com"){
            console.log(req.decoded);
            next();
          } else{
            console.log(req.decoded);
            return res.json({
              success: false,
              message: 'You are  Admin ... Go out!'
            });
          }
          
          // next();
        }
      });
    } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
}