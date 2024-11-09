export const createReportQuery = `
INSERT INTO tbl_reportes
(usuario_id, titulo, cuerpo, latitud, longitud, estado, fecha_creacion)
VALUES (?, ?, ?, ?, ?, ?, ?);
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
