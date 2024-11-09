export interface ReportDTO {
    reporteId: number;
    usuarioId: number;
    titulo: string;
    cuerpo: string;
    latitud: number;
    longitud: number;
    estado: number;
    fechaCreacion: Date;
}
