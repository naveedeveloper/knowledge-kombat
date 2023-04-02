import mongoose from "mongoose";

export default async function connect(){
    const con = await mongoose.connect(process.env.ATLAS_URL);
    console.log("Database Connected");
    return con;
}