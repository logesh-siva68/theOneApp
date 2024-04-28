import { Router } from 'express';
const goalsRouter = Router();
goalsRouter.get('/verify', (req, res) => {
    res.status(200).send();
});
export default goalsRouter;
//# sourceMappingURL=goals.routes.js.map