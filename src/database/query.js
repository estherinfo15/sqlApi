export const queries={
    getAllUsers:'SELECT * FROM usuarios',
    createNewUser:"insert into usuarios(nombre,correo,contraseña) VALUES(@Nombre,@correo,@contraseña)",
    getUserById:'SELECT * FROM usuarios WHERE Id=@Id',
    deleteUsers: 'DELETE FROM [cemex].[dbo].[usuarios] WHERE Id=@Id',
    getTotalUsers:'SELECT COUNT(*) from [cemex].[dbo].[usuarios]',
    updateUsers:'UPDATE usuarios SET Nombre=@Nombre, correo=@correo,contraseña=@contraseña WHERE Id=@Id'
};
