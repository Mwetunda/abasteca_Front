export class UsuariDto {
    public idUsuari?: number;
    public userName?: string;
    public email?: string;
    public telefone?: string;
    public nome?: string;
    public foto?: string;
    public idPerfi?: number;
    public perfi?: string;
    public idProviniaResidencia?: number;
    public provinciaResidencia: string;
    public estado?: boolean;
    public tokenDivice?: string;
    public dataUltimoLogin?: Date;
    public dataCriacao?: Date;
    public dataActulizacao?: Date;
  }