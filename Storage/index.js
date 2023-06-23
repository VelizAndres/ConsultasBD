import mysql from "mysql"

const connection = mysql.createConnection({
    host: '3.144.37.35',       // Cambia esto si tu base de datos no está en el mismo servidor
    user: 'mostrar',      // Cambia 'tu_usuario' por tu nombre de usuario de MySQL
    password: 'Pass123+',  // Cambia 'tu_contraseña' por tu contraseña de MySQL
    database: 'Tarea',  // Cambia 'tu_basededatos' por el nombre de tu base de datos
    port: "3306"
  });

  export const dataBase = connection;
    