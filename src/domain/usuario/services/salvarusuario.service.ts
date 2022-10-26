import UsuarioDataProvider from "../dataproviders/usuario.dataprovaider";
import Usuario from "../entities/usuario.entity";
import SalvarUsuarioUseCase from "../usecases/salvarusuario.usecase";

export default class SalvarUsuario implements SalvarUsuarioUseCase{
    constructor(
        private usuarioDataProvider: UsuarioDataProvider
    ){}

    async execute(usuario: Usuario): Promise<Usuario> {
        return await this.usuarioDataProvider.salvarUsuario(usuario) 
    }
}