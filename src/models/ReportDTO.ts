import { CommentDTO } from "./CommentDTO";
import { UserDTO } from "./UserDTO";

export interface ReportDTO {
    reporteId: number;
    usuarioId: number;
    titulo: string;
    cuerpo: string;
    latitud: number;
    longitud: number;
    estado: number;
    fechaCreacion: Date;
    usuario?: UserDTO
    comments?:CommentDTO[]
}
    