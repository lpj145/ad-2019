module.exports = (httpServer) => {
  httpServer.register(require('fastify-cors'), {
    origin: process.env.SERVER_CORS,
    allowedHeaders: ['Content-Type'],
    methods: ['POST', 'GET', 'PUT', 'DELETE']
  })
}
