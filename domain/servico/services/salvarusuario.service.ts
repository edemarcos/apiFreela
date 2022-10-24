import Usuario from "../entities/usuario.entity";
import SalvarUsuarioUseCase from "../usecases/salvarusuario.usecase";

export default class SalvarUsuario implements SalvarUsuarioUseCase{
    constructor(
        private readonly usuario: Usuario
    ){}

    async execute(usuario: Usuario): Promise<Usuario> {
        const retorno = await this.usuarioDataProvider.save(usuario) 
        return retorno
    }
}