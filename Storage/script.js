import { dataBase1 } from "./BD1";
import { dataBase2 } from "./BD2";

export const getUser = async () => {
  console.log("Conectado");
  try {
    dataBase1.connect();
    return await new Promise((resolve, reject) => {
      dataBase1.query("SELECT * FROM usuario", (err, data) =>
        err ? reject(err) : resolve(data)
      );
    });
  } catch (error) {
    console.log("Script", error);
    return [];
  }
};

export const getBancos = async () => {
  console.log("Conectado");
  try {
    dataBase2.connect();
    return await new Promise((resolve, reject) => {
      dataBase2.query("SELECT * FROM datos", (err, data) =>
        err ? reject(err) : resolve(data)
      );
    });
  } catch (error) {
    console.log("Script", error);
    return [];
  }
};
