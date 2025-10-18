import http from 'node:http';



const server = http.createServer((req, res) => {
    return res.setHeader('Content-type', 'application/json').end(JSON.stringify([{id: 1, name: 'Lara'}]))
})

server.listen(3333)
