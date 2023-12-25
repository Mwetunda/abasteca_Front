import { LocalizacaoPostoAbastecimentoDto } from "./localizacao-posto-bastecimento";
import { CombustivelPostoAbastecimentoDto } from "./combustivel-posto-abastecimento";

export class PostoAbastecimentoDto {
    public idPostoAbastecimento?: number;
    public Designacao?: string;
    public idOperadora?: number;
    public operadora?: string;
    public DataCriacao?: Date;
    public DataActulizacao?: Date;
    public Endereco?: LocalizacaoPostoAbastecimentoDto;
    public Combustiveis?: CombustivelPostoAbastecimentoDto[];
  }