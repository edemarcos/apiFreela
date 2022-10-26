import UsuarioDataProvider from "../../../domain/usuario/dataproviders/usuario.dataprovaider";
import Usuario from "../../../domain/usuario/entities/usuario.entity";

export default class UsuarProvider implements UsuarioDataProvider{
    async salvarUsuario(usuario: Usuario): Promise<Usuario> {
        return usuario
    }
}