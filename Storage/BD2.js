import mysql from "mysql"

const connection = mysql.createConnection({
    host: '52.15.71.203',       // Cambia esto si tu base de datos no está en el mismo servidor
    user: 'mostrar1',      // Cambia 'tu_usuario' por tu nombre de usuario de MySQL
    password: 'Pass123',  // Cambia 'tu_contraseña' por tu contraseña de MySQL
    database: 'bancos',  // Cambia 'tu_basededatos' por el nombre de tu base de datos
    port: "3306"
  });

  export const dataBase2 = connection;
    