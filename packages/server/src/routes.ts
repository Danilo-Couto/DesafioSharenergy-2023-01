import express from 'express';

const routes = express.Router();

routes.get('/api', (req, res) => {
    return res.json({ message: 'Hello from server!'});
});

export default routes;