import mongoose from 'mongoose';

const mongoURL = "mongodb+srv://admin:12345@clusterskm.ffe1pgc.mongodb.net/agritech_db?retryWrites=true&w=majority";

mongoose.connect(mongoURL)
  .then(() => {
    console.log("Berhasil terhubung ke MongoDB Atlas!");
  })
  .catch((err) => {
    console.log("Error koneksi database: ", err);
  });