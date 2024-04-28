import mongoose from "mongoose";

export async function connectToDb(uri) {
  try {
    await mongoose.connect(uri).then(() => console.log(`Database connected`));
  } catch (error) {
    console.error(error);
  }
}