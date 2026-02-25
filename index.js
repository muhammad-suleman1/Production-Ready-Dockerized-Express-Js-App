const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Production Microservice!. This is a simple Express.js application running in a Docker container. It serves as a demonstration of how to containerize a Node.js application using Docker. The application listens on port 3000 and responds with a greeting message when accessed at the root URL. Additionally, it includes a health check endpoint at /health that returns a status of OK, which can be used to verify that the application is running correctly within the container. This setup is ideal for deploying microservices in a production environment, allowing for easy scaling and management using container orchestration tools like Kubernetes.");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});