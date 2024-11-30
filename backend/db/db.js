const mongoose = require('mongoose');

connectToDB()
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });

async function connectToDB() {
  await mongoose.connect(process.env.MONGO_URL);
}

module.exports = connectToDB;