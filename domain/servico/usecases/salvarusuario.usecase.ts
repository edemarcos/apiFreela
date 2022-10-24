import Usuario from "../entities/usuario.entity";

export default interface SalvarUsuarioUseCase {
    execute(usuario: Usuario): Promise<Usuario>
}