// init-mongo.js
db = db.getSiblingDB('InstaClone'); // Cambia a la base de datos UPTASK
// Crea un usuario con permisos de lectura y escritura
db.createUser({
  user: 'instaClone_admin',
  pwd: '1nstaCl0ne', // Cambia esto a una contraseña segura
  roles: [
    { role: 'readWrite', db: 'InstaClone' }
  ]
});