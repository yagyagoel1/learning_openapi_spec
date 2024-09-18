import express ,{json,urlencoded} from "express";
import {RegisterRoutes}from "../build/routes";
export const app = express();


app.use(urlencoded({
    extended:true
}))

app.use(json())


RegisterRoutes(app)