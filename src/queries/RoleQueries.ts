export const createRoleQuery = `
INSERT INTO tbl_roles
(nombre, estado, fecha_creacion)
VALUES (?, ?, ?);
`;

export const updateRoleQuery = `
UPDATE tbl_roles
SET nombre = ?, estado = ?
WHERE rol_id = ?;
`;

export const getAllRolesQuery = `
SELECT 
    rol_id as rolId,
    nombre,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_roles;
`;

export const findRoleQuery = `
SELECT 
    rol_id as rolId,
    nombre,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_roles
WHERE rol_id = ?;
`;
