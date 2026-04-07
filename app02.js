const http = require('http')
const server = http.createServer((request, response) => {
    console.log(request.url)
    console.log(request.method)
    return response.end()
})

const PORT = 8000
server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})