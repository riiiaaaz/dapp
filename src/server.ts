import express from "express";
import weatherRoute from "./routes/weatherRoute.js";
import uniRoutes from "./routes/uniRoutes.js";
import cors from "cors";
// We will create an express app
const app = express();

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());
app.use(cors())

// We define our first route
app.use("/api/weather", weatherRoute);
app.use("/api/university", uniRoutes);
// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
