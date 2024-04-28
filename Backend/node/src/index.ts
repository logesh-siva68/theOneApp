import { App } from "./app.js";
import { Route } from "./interfaces/common.interface.js";
import goalsRouter from "./routes/goals.routes.js";
import loginRouter from "./routes/login.routes.js";
const publicRoutes:Route[] = [
    {
        path:"/user",
        handler:loginRouter
    }
];

const securedRoutes:Route[] = [
    {
        path:"/goal",
        handler:goalsRouter
    }
];
const app = new App(publicRoutes, securedRoutes);

app.createAndRunServer()