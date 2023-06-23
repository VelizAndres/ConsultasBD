import { resolve } from "styled-jsx/css";
import { dataBase } from ".";

export const getPokemons = async () => {
    console.log("Conectado")
    try{

        dataBase.connect(); 
        return (await new Promise((resolve,reject) => {
            dataBase.query(
                'SELECT * FROM Pokemon',
                (err, data) => (err ? reject(err) : resolve(data)),
            );
        }))
    }
    catch (error)
    {
        console.log("Script", error)
        return [];
    }       
}