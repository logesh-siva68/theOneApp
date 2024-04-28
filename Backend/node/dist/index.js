import { App } from "./app.js";
import goalsRouter from "./routes/goals.routes.js";
import loginRouter from "./routes/login.routes.js";
const publicRoutes = [
    {
        path: "/user",
        handler: loginRouter
    }
];
const securedRoutes = [
    {
        path: "/goal",
        handler: goalsRouter
    }
];
const app = new App(publicRoutes, securedRoutes);
app.createAndRunServer();
//# sourceMappingURL=index.js.map