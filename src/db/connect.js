const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://subhalaxmidash957:subhalaxmidash@cluster0.kp5z8jj.mongodb.net/test",).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})

module.exports = mongoose