const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    fs.readFile('public/index.html', (error, data) => {
        if (error) {
            response.writeHead(404, {'Content-type': 'text/html'})
            return response.end('File not found (404)')
        }
        response.writeHead(200, {'Content-type': 'text/html'})
        response.write(data)
        return response.end()
    })
})

const PORT = 8000
server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})