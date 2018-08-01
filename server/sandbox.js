const bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(8);
let password = bcrypt.hashSync('amel22', salt);

console.log(password)