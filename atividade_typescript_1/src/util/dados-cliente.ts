import dados from '../dados/dados-clientes.json';  // import do arquivo json
import Cliente from '../modelo/cliente';           // import da classe modelo cliente

export default class DadosCliente{

    public static dados():Array<Cliente>{      // retorna um array de objetos do tipo cliente

        //Converte os dados para uma string no formato json
        const json_para_string = JSON.stringify(dados);

        //converte o json para uma lista de objetos genéricos
        const json_para_objeto = JSON.parse(json_para_string);

        //Array de Clientes
        const listaClientes:Array<Cliente> = [];

        //converte a lista de objetos genéricos para 
        //uma lista de objetos do tipo Cliente
        json_para_objeto.forEach( (element) => {

            //vamos percorrer elemento por elemento 
            //e criar um objeto Cliente
            let cliente = new Cliente(element.id, element.nome, 
                element.email,element.ano_nacimento);

            //adiciona o objeto Cliente ao array de Clientes
            listaClientes.push(cliente);
        });

        //Retorna a lista de objetos de clientes
        return listaClientes;
    }
}