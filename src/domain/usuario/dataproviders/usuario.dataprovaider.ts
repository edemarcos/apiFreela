import Usuario from "../entities/usuario.entity";

export default interface UsuarioDataProvider {
    salvarUsuario(usuario: Usuario): Promise<Usuario>
}