import Cliente from './modelo/cliente';
import RepositorioClienteImpl from './repositorio/impl/repositorio-cliente-impl';

const repositorio = new RepositorioClienteImpl();

// listar todos os registros recebidos do arquivo json
console.log("----- Listar dados -----")
console.log(repositorio.listarTodos());

// criar um novo registro
const incluirCliente = new Cliente(
    repositorio.obterProximoId(),
    "Pedro Loss",
    "pedroloss@testado.com.br",
    2003
);

// salvar o registro
console.log("----- Salvar Cliente -----");
repositorio.salvar(incluirCliente); //inclusão do novo registro
console.log(repositorio.listarTodos()); //listagem de todos os registros

// busca pelo ID
console.log("----- Busca pelo ID -----");
const buscaPessoa = repositorio.buscarPorId(4);
console.log(buscaPessoa);