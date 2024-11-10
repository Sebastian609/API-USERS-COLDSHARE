// CommentDTO.ts

export interface CommentDTO {
    comentariosId: number;
    reporteId: number;
    usuarioId: number;
    cuerpo: string;
    estado: number;
    nombreUsuario?:string;
    fechaCreacion: Date;
}
