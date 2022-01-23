import app from './app';
import "./database";

const port = 8080;

app.listen(port);

console.log("Server listen on port", port);