const resolvers = {
  Query: {
    getUser: async (_, {}, ctx) => {
        console.log("opteniendo usuario")
    },
  } 
}

module.exports = resolvers;