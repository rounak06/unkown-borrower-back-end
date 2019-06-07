const Profile = require('../models/profile');


Profile.sync({force: true}).then(() => {
    console.log("Migration done")
}).catch((err) => {
    console.log(err);
});