const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } =require('./gql/index');
const  conectarDBMongo = require("./db/db");
require('dotenv').config();


//servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        // console.log(req.headers['authorization'])
        // console.log(req.headers);
        const token = req.headers['authorization'] || '';
        if(token) {
            try {
                const usuario = jwt.verify(token.replace('Bearer ', ''), process.env.SECRETA );
                // console.log(usuario);
                return {
                    usuario
                }
            } catch (error) {
                console.log('Hubo un error');
                console.log(error);
            }
        }
    }
});

// Crear una instancia de Express
const app = express();
// Iniciar Apollo Server y aplicar middleware
async function startServer() {
    await server.start();
    app.use(express.json());
    app.use('/graphql', expressMiddleware(server));
  }
  
startServer();
//conectar bd
conectarDBMongo();
// Iniciar el servidor HTTP
const PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}/graphql`);
});