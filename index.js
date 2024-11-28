import express from 'express';
import routes from 'routes/crmRoutes';

const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on post ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
