import express from 'express';
const router = express.Router();

const userRouter = require('./user')
 
router.use('/', userRouter);

router.get('/test', (req, res) => {
    return res.json({ message: 'Hello from server!'});
});

export default router;