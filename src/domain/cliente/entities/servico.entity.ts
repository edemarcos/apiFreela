import CategoriaServico from "./categoria.servico.entity";
import Cliente from "./cliente.entity";
import Proposta from "../../freelancer/entities/proposta.entity";

export default class Servico{
    constructor (
        public id: number,
        public clienteId: Cliente,
        public catgoriaId: CategoriaServico,
        public titulo: string,
        public descricao: string,
        public nivelExperiencia: string,
        public habilidadesDesejadas: string,
        public anexo: string,
        public valor: number,
        public visibilidade: string,
        public status: boolean,
        public dataCadastro: Date,
        public dataFim: Date,
        public proposta?: Array<Proposta>,
    ){}
}