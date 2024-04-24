import { App } from "./app.js";
import loginRouter from "./routes/login.routes.js";
const publicRoutes = [
    {
        path: "/user",
        handler: loginRouter
    }
];
const app = new App(publicRoutes, []);
app.createAndRunServer();
//# sourceMappingURL=index.js.map