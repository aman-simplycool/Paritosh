import express, {Express} from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Body Parser to parse the data from body
function middleWares(app: Express) {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.static("public/"));
}

export default middleWares;