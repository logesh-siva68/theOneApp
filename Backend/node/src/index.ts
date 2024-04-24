import { App } from "./app.js";
import { Route } from "./interfaces/common.interface.js";
import loginRouter from "./routes/login.routes.js";
const publicRoutes:Route[] = [
    {
        path:"/user",
        handler:loginRouter
    }
];
const app = new App(publicRoutes, []);

app.createAndRunServer()