import { getConnection,sql,queries } from "../database"


export const getUsers=async(req,res)=>{
    try{
        const pool=await getConnection();//llamo la conexion
        const result=await pool.request().query(queries.getAllUsers);
        console.log(result.recordset);    
        res.json(result.recordset);//datos al navegador
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

export const createNewUsers=async(req,res)=>{
    const{Nombre,correo,contraseña}=req.body;
   
    if(Nombre==null || correo==null || contraseña==null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
    }
    try{
    const pool=await getConnection();
    await pool.request().input("nombre",sql.VarChar,Nombre)
    .input('correo',sql.VarChar,correo)
    .input('contraseña',sql.VarChar,contraseña)
    .query(queries.createNewUser);

    res.json({Nombre,correo,contraseña});
    }catch(error){
       res.status(500);
       res.send(error.message);
    }
};

export const getUserId = async(req,res)=>{
    try {
        const{Id}=req.params;
        const pool=await getConnection();
        const result=await pool
        .request()
        .input("Id",Id)
        .query(queries.getUserById);
        console.log(result);
        res.send(result.recordset[0]);
    } catch (error) {
        console.log(error);
    }    
};

export const deleteUsersById = async(req,res)=>{
    try {
        const{Id}=req.params;
        const pool=await getConnection();
        const result=await pool
        .request()
        .input("Id",Id)
        .query(queries.deleteUsers);
        res.sendStatus(204);
        console.log("Eliminación exitosa");
    } catch (error) {
        console.log(error);
    }    
};

export const getTotalUsers = async(req,res)=>{
    try {       
        const pool=await getConnection();
        const result=await pool
        .request()
        .query(queries.getTotalUsers);
        console.log("el total de registros es: ", result);
        res.json(result.recordset[0]['']);
    } catch (error) {
        console.log(error);
    }    
};

export const updateUsersById=async(req,res)=>{
    const{Nombre,correo,contraseña}=req.body;
    const{Id}=req.params;
   
    if(Nombre==null || correo==null || contraseña==null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
    }
    try {
        const pool=await getConnection();
        const result=await pool
        .request()
        .input("Nombre",sql.VarChar,Nombre)
        .input("correo",sql.VarChar,correo)
        .input("contraseña", sql.VarChar,contraseña)
        .input("Id", sql.Int, Id)
        .query(queries.updateUsers);
        
        res.json({Nombre, correo,contraseña});   
    } catch (error) {
        console.log(error);
    }
   

}




