import sql from 'mssql';
import config from "../config";

const dbSettings={
user:"sa",
password:"ccgroup",
server:"localhost",
database:"cemex",
//user:config.dbUser,
//password:config.dbPassword,
//server:config.dbServer,
//database:config.dbDatabase,
options:{
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
}
};
//conectarse a la base a traves de los parametros y ahcer consulta
export async function getConnection(){
    try{
        const pool=await sql.connect(dbSettings);
        return pool;
    }catch(err){
       console.log(err);
    }
}

export {sql}; //exprto sql para que otros modulos lo utilicen


