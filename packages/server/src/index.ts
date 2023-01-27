import express from 'express';
import cors from 'cors';
import routes from './routes/router';
import connectionDB from './db/connection';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

// DB Connection
connectionDB();

//Routes
app.use('/api', routes);

app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`)
});
