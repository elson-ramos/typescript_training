import Cliente from "../modelo/cliente";

export default interface IRepositorioCliente {
    listarTodos():Array<Cliente>;
    buscarPorId(id:number): Cliente;
    salvar(cliente:Cliente): void;
    atualizar(id:number, cliente:Cliente): void;
    excluir(id:number): void;
}