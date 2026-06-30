const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // O Render vai injetar a porta automaticamente

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server está rodando na porta ${port}`);
});