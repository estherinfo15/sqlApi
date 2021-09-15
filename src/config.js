import { config } from "dotenv"
config();


export default{
    port:process.env.PORT || 4000,
    dbUser:process.env.dbUser || "",
    dbPassword:process.env.dbPassword || "",
    dbServer:process.env.dbServer || "",
    dbDatabase:process.env.dbDatabase || ""
};