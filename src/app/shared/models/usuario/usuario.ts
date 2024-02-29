export class UsuarioDto {
    public idUsuario?: number;
    public userName?: string;
    public passWord?: string;
    public email?: string;
    public telefone?: string;
    public nome?: string;
    public foto?: string;
    public idPerfil?: number;
    public perfil?: string;
    public idProvinciaResidencia?: number;
    public provinciaResidencia: string;
    public estado?: boolean;
    public tokenDivice?: string;
    public dataUltimoLogin?: Date;
    public dataCriacao?: Date;
    public dataActulizacao?: Date;
  }