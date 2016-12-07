import * as http from 'http';
import * as express from 'express';
const app = express();
const server = http.createServer(app);

app.use(express.static('./app/web'));

app.get('/', (req, res) => {
    console.log(`express touched`);
    res.sendFile('index.html', { root: "./app/web" });
 });

server.listen(3000, () => {
    console.log(`listening on :3000`);
})
