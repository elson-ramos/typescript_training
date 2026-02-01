import DadosCliente from "../../util/dados-cliente";
import IRepositorioCliente from "../repositorio-cliente";  // importação das classes a serem utilizadas.
import Cliente from "../../modelo/cliente";

export default class RepositorioClienteImpl implements IRepositorioCliente{  // declaração da classe, com implementação da classe IRepositorioCliente
    
    //Array de Clientes
    private listaClientes:Array<Cliente> = [];  // declaração do array de clientes
    
    constructor(){  //ponto chave da classe
        //Carrega as informações contidas no arquivo json
        this.listaClientes = DadosCliente.dados();  // informações colocadas no array de clientes
    }

    public listarTodos():Array<Cliente>{  // retorna apenas o array de clientes
        return this.listaClientes;        // this: usado para acessar o array, que foi declarado globalmente
    }

    public buscarPorId(id:number): Cliente {  // recebe o numero, e procura na lista o registro com esse numero identificador.
        return this.listaClientes.find(
            cliente => cliente.id == id
        );
    }

    public salvar(cliente:Cliente): void{   // incluir novos registros na lista de clientes
        this.listaClientes.push(cliente);   // obs: identificador unico, pois não estamos usando um banco de dados
    }

    public atualizar(id:number, cliente:Cliente): void{
        //Encontra o índice do registro que será removido
        let indice = this.listaClientes.findIndex(  // findindex: encontra no array o index que possui o identificador informado
            cliente => cliente.id == id
        );

        //Atualiza o registro
        this.listaClientes[indice] = cliente;
    }

    public excluir(id:number): void{
        //Encontra o índice do registro que será removido
        let indice = this.listaClientes.findIndex(
            cliente => cliente.id == id
        );

        //Remove o registo do array
        this.listaClientes.splice(indice, 1);   // splice: retirar o registro da lista
    }

    //Apenas para simular a chave incremental do banco de dados
    //Retorna o próximo valor do identificado para que não 
    //haja duplicidade de identificadores
    public obterProximoId(): number{
        
        if(this.listaClientes.length == 0){
            return 1
        }else{
            //Obtém o último registro do array
            let ultimoRegistro = this.listaClientes[
                this.listaClientes.length - 1
            ];

            //Incrementa o identificador 
            //para ser usado um novo registro
            return ultimoRegistro.id + 1;
        }
    }
}