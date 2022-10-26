import Freelancer from "./freelancer.entity";
import Habilidade from "./habilidade.entity";

export default class FreelancerHabilidade{
    constructor (
        public id: number,
        public habilidadeId: Habilidade,
        public freelancerId: Freelancer,
    ){}
}