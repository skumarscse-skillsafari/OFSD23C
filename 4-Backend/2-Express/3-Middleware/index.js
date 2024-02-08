import express from "express";
const app = express();
const PORT = 5000;

const middlewareFun = (req, res, next) => {
  const { username } = req.query;
  if (username === "john") {
    req.email = "john@skillsafari.in";
    next();
  } else {
    res.status(400).json({ success: false, message: "Unauthorized user" });
  }
};

const middlewareOne = (req, res, next) => {
  console.log("Middleware - 1");
  next();
};

app.use(middlewareOne);
// Routes
// Middleware => req, res, next()
// req <=> middleware <=> res
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Middleware" });
});

app.get("/products", middlewareFun, (req, res) => {
  res.status(200).json({ success: true, message: "Middleware route" });
});

app.get("/auth", [middlewareFun, middlewareOne], (req, res) => {
  const { email } = req;
  const { username } = req.query;
  res
    .status(200)
    .json({ success: true, message: `Username: ${username}, Email: ${email}` });
});

app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
