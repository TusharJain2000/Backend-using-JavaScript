import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error:", error);
    });

    app.listen(process.env.PORT || 8002, () => {
      console.log(`Sever is running at port:${process.env.PORT}`);
    });
  })

  .catch((error) => {
    console.log("MongoDB Connection Failed:", error);
  });

/*Connecting to DB using NORMAL Function

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("DB has been connected");
  } catch (error) {
    console.log("Error:", error);
  }
}
connectDb();
*/

/*Connecting to DB using IFFY function and also adding express in the same index file. No problem with the code but it becomes a mix of a lot of things not RECOMMENDED !!

import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/
