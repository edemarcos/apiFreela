import Freelancer from "./freelancer.entity";
import Servico from "./servico.entity";

export default class Projeto{
    constructor (
        public id: number,
        public freelancerId: Freelancer,
        public descricao: string,
        public anexo: string,
        public url: string,
        public servicoId?: Servico,
    ){}
}