import Usuario from "./usuario.entity";

export default class Freelancer{
    constructor (
        public id: number,
        public userId: Usuario,
        public nome: string,
        public areaInteresse: string,
        public contato: string,
        public avaliacao: number,
        public precoHora: number
    ){}
}