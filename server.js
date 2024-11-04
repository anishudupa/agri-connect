import "dotenv/config";
import { app } from "./app.js";
import { dbConnect } from "./db/connect.js";

dbConnect();

export default app;
