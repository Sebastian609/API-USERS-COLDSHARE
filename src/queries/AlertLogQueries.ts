export const createLogAlertQuery = `
INSERT INTO tbl_log_alertas
(latitud, longitud)
VALUES (?, ?);
`;

export const getAllLogAlertsQuery = `
SELECT 
    log_alerta_id as logAlertaId,
    latitud,
    longitud,
    fecha_creacion as fechaCreacion
FROM tbl_log_alertas;
`;

export const findLogAlertQuery = `
SELECT 
    log_alerta_id as logAlertaId,
    latitud,
    longitud,
    fecha_creacion as fechaCreacion
FROM tbl_log_alertas
WHERE log_alerta_id = ?;
`;
