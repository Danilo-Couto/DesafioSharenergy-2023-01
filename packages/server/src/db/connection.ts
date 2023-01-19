import mongoose from 'mongoose';

export default async function connectionDB() {
  try {
    await mongoose.connect(`mongodb+srv://danilo-couto:DIxA1n0JI3PxKRhE@cluster0.t9nwrpm.mongodb.net/shareenergy-api?retryWrites=true&w=majority`);
    console.log('connected to MongoDB...')

  } catch (err) {
    console.log(err)
  }
};
  
// user = danilo-couto
// mongosb pass = DIxA1n0JI3PxKRhE
// https://www.youtube.com/watch?v=anMK76I2dUA