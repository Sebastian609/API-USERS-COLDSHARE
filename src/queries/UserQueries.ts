export const createUserQuery = `
INSERT INTO tbl_usuarios
(vecindario_id, rol_id, nombre, dni, password)
VALUES (?, ?, ?, ?, ?);
`;

export const authUserQuery = `
SELECT 
    usuario_id as usuarioId,
    vecindario_id as vecindarioId,
    rol_id as rolId,
    nombre,
    dni,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_usuarios
WHERE dni = ? AND estado = 1;
`;

export const updateUserQuery = `
UPDATE tbl_usuarios
SET estado = ?
WHERE usuario_id = ?;
`;

export const deleteUserQuery = `
DELETE FROM tbl_usuarios
WHERE usuario_id = ?;
`;

export const getAllUsersQuery = `
SELECT 
    usuario_id as usuarioId,
    vecindario_id as vecindarioId,
    rol_id as rolId,
    nombre,
    dni,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_usuarios;
`;

export const findUserQuery = `
SELECT 
    usuario_id as usuarioId,
    vecindario_id as vecindarioId,
    rol_id as rolId,
    nombre,
    dni,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_usuarios
WHERE usuario_id = ?;
`;

export const auth =  `
    select usuario_id     as usuarioId,
           vecindario_id  as vecindarioId,
           rol_id         as rolId,
           nombre,
           dni,
           estado,
           fecha_creacion as fechaCreacion
    from tbl_usuarios
    where dni like "12345678"
      and password LIKE "pass1"
`
