export const createNeighborhoodQuery = `
INSERT INTO tbl_vecindario
(nombre, direccion, estado, fecha_creacion)
VALUES (?, ?, ?, ?);
`;

export const deleteNeighborhoodQuery = `
DELETE FROM tbl_vecindario
WHERE vecindario_id = ?;
`;

export const updateNeighborhoodQuery = `
UPDATE tbl_vecindario
SET nombre = ?, direccion = ?, estado = ?
WHERE vecindario_id = ?;
`;

export const getAllNeighborhoodsQuery = `
SELECT  
    vecindario_id as vecindarioId,
    nombre,
    direccion,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_vecindario;
`;

export const findNeighborhoodQuery = `
SELECT 
    vecindario_id as vecindarioId,
    nombre,
    direccion,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_vecindario
WHERE vecindario_id = ?;
`;
