const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ detail: 'Base path is recognized' });
});

app.get('/ping', (req, res) => {
    res.status(200).send({ detail: 'I can ping this service' });
});

app.get('/ready', (req, res) => {
    res.status(200).send({ detail: 'The service is ready' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('The server is ready to accept requests');
})