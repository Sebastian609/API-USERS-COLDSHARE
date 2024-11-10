export const createReportQuery = `
INSERT INTO tbl_reportes
(usuario_id, titulo, cuerpo, latitud, longitud)
VALUES (?, ?, ?, ?, ?);
`;

export const updateReportQuery = `
UPDATE tbl_reportes
SET usuario_id = ?, titulo = ?, cuerpo = ?, latitud = ?, longitud = ?, estado = ?
WHERE reporte_id = ?;
`;

export const getAllReportsQuery = `
SELECT 
    reporte_id as reporteId,
    usuario_id as usuarioId,
    titulo,
    cuerpo,
    latitud,
    longitud,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_reportes;
`;

export const findReportQuery = `
SELECT 
    reporte_id as reporteId,
    usuario_id as usuarioId,
    titulo,
    cuerpo,
    latitud,
    longitud,
    estado,
    fecha_creacion as fechaCreacion
FROM tbl_reportes
WHERE reporte_id = ?;
`;
export const findReportQuerybyVecindario=
`SELECT r.reporte_id AS reporteId,
    r.usuario_id AS usuarioId,
    r.titulo,
    r.cuerpo,
    r.latitud,
    r.longitud,
    r.estado,
    r.fecha_creacion AS fechaCreacion
FROM tbl_reportes r
JOIN tbl_usuarios u ON r.usuario_id = u.usuario_id
WHERE u.vecindario_id = ?;
`;
