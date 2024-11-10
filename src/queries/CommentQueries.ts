export const createCommentQuery = `
INSERT INTO tbl_comentarios
(reporte_id, usuario_id, cuerpo)
VALUES (?, ?, ?);
`;

export const updateCommentQuery = `
UPDATE tbl_comentarios
SET reporte_id = ?, usuario_id = ?, cuerpo = ?, estado = ?
WHERE comentarios_id = ?;
`;

export const getAllCommentsQuery = `
SELECT 
    comentarios_id as comentariosId,
    reporte_id as reporteId,
    usuario_id as usuarioId,
    cuerpo,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_comentarios;
`;

export const findCommentQuery = `
SELECT 
    comentarios_id as comentariosId,
    reporte_id as reporteId,
    usuario_id as usuarioId,
    cuerpo,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_comentarios
WHERE comentarios_id = ?;
`;
export const findCommentQueryByReporte = `
SELECT 
    comentarios_id as comentariosId,
    reporte_id as reporteId,
    usuario_id as usuarioId,
    cuerpo,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_comentarios
WHERE reporte_id = ?;
`;
