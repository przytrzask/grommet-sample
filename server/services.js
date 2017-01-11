import compression from 'compression';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const PORT = process.env.PORT || 8000;

const app = express();
app.use(compression());
app.use(morgan('tiny'));
app.use(bodyParser.json());

const tableHeaders = [{id: 1,name: "aaafdgfdga"},{id: 2,name: "bbbb"},{id: 3,name: "bbbb"},{id: 4,name: "bbbb"},{id: 5,name: "bbbb"},{id: 6,name: "bbbb"},{id: 7,name: "bbbb"},{id: 8,name: "bbbb"},{id: 9,name: "bbbb"},{id: 10,name: "bbbb"},{id: 11,name: "bbbb"},{id: 12,name: "bbbb"},{id: 13,name: "bbbb"},{id: 14,name: "bbbb"},{id: 15,name: "bbbb"}];

const tableRows = [{id: 1,name: "aaafdgfdga"},{id: 2,name: "bbbb"},{id: 3,name: "bbbb"},{id: 4,name: "bbbb"},{id: 5,name: "bbbb"},{id: 6,name: "bbbb"},{id: 7,name: "bbbb"},{id: 8,name: "bbbb"},{id: 9,name: "bbbb"},{id: 10,name: "bbbb"},{id: 11,name: "bbbb"},{id: 12,name: "bbbb"},{id: 13,name: "bbbb"},{id: 14,name: "bbbb"},{id: 15,name: "bbbb"}];

app.get('/api/json', (req, res) => {
res.send(tableHeaders);
});

app.get('/api/rows', (req, res) => {
res.send(tableRows);
});

app.use('/', express.static(path.join(__dirname, '/../dist')));
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

const server = http.createServer(app);
server.listen(PORT);

console.log(`Server started, listening at: http://localhost:${PORT}...`);


