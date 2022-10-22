import Usuario from "./usuario.entity";

export default class Cliente{
    constructor (
        public id: number,
        public userId: Usuario,
        public nome: string,
        public ramo: string,
        public contato: string,
        public avaliacao: number
    ){}
}