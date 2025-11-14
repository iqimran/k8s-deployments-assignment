const http = require('http');
const version = process.env.VERSION || 'v2';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<html><body><h1>Web App - Version ${version}</h1></body></html>`);
});

server.listen(port, () => console.log(`listening ${port} version=${version}`));
