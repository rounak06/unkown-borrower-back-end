const User = require('../models/user');

User.sync({force: true}).then(() => {
    console.log("Migration done")
}).catch((err) => {
    console.log(err);
});