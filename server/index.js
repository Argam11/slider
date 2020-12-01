const express = require("express");
var cors = require("cors");

const app = express();
const port = 3000;
const images_array = require("./storege/images.json");

app.use(cors());

app.get("/", (req, res) => res.send(images_array));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// const Hapi = require("@hapi/hapi");

// const init = async () => {
//     const server = Hapi.server({
//         port: 3000,
//         host: "localhost"
//     });

//     // docs
//     await server.register([
//         require("vision"),
//         require("inert"),
//         require("lout")
//     ]);

//     server.route({
//         method: "GET",
//         path: "/hello",
//         handler: (request, h) => {
//             return "Hello World!";
//         }
//     });

//     await server.start();
//     console.log("Server running on port 3000");
// };

// init();
