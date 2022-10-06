import express, { Express } from 'express';
import middleWares from './middlewares';

// Express server
const app: Express = express();
const PORT: number = 8000;

// middleWares
middleWares(app);

//Listen the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;