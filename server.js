import next from "next";
import express from "express";

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 3001;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    res.json({
      email,
      password,
      success: true,
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
