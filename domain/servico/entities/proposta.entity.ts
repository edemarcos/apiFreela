import Freelancer from "./freelancer.entity";
import Servico from "./servico.entity";

export default class Proposta{
    constructor (
        public id: number,
        public freelancerId: Freelancer,
        public servicoId: Servico,
        public descricao: string,
        public valor: number,
        public anexo: string,
        public status: string
    ){}
}