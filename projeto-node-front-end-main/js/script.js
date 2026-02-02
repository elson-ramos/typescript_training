window.addEventListener("load", function() {
    createTr();
});


document.getElementById("btregistar").addEventListener("click", registrar);

async function statusServidor(){
    const URL = "http://localhost:3000";
  
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain',
        }
      });
  
      const resposta = await response.text();
      console.log(resposta);
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  statusServidor();
  
  async function listarClientes(){
    const URL = "http://localhost:3000/clientes";
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
  
      const clientes = await response.json();
      console.log(clientes);
      return clientes;
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  
  async function buscarClientePorId(id){
    const URL = "http://localhost:3000/cliente?id="+ id;
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
  
      const cliente = await response.json();
      return cliente;
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  
  async function salvar(cliente){
    const URL = "http://localhost:3000";
    try {
      const response = await fetch(URL, {
        method: "POST",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
      });
  
      const novoCliente = await response.json();
      return novoCliente;
  
    }catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  
  async function atualizar(id, cliente){
    const URL = "http://localhost:3000/"+ id;
    try {
      const response = await fetch(URL, {
        method: "PUT",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
      });
  
      const clienteAterado = await response.json();
      return clienteAterado;
  
    }catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  
  async function excluir(id){
    const URL = "http://localhost:3000/"+ id;
  
    const response = await fetch(URL, {
      method: "DELETE",
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    });
  
    console.log(response);
  
    if (response.ok) {
      return true;
    }else{
      return false;
    }
  }
  
  const getTableBody = document.querySelector('tbody');
  async function createTr() {
    const clientes = await listarClientes();
  
    //Percorre a lista de clientes e
    //cria as linnhas da tabela
    const tr = clientes.map((cliente) => {
      return `<tr>
          <td>${cliente.id}</td>  
          <td>${cliente.nome}</td>  
          <td>${cliente.email}</td>
          <td>${cliente.anoNascimento}</td>
          <td>
            <button type="button" class="btn btn-secondary btn-sm" onclick="editar(${cliente.id})">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button type="button" class="btn btn-danger btn-sm" onclick="deletar(${cliente.id})">
              <i class="bi bi-trash"></i>
            </button>
          </td>  
        </tr>`
    }).join('');
    getTableBody.innerHTML = tr;
  }
  
  //Obtem as referencias dos formulários
  const form = document.getElementById("formulario");
  const nomeIdentificador = document.getElementById("identificador");
  const nomeForm = document.getElementById("nome");
  const emailForm = document.getElementById("email");
  const anoNascimentoForm = document.getElementById("anoNascimento");
  
  function registrar(){
    const id = nomeIdentificador.value;
  
    //Veririca o tipo da operação 
    //se será cadastrar um novo registro
    //ou alterar um registro existente
    if(id == "" || id == "0"){
      cadastrar();
    }else{
      alterar();
    }
  }
  
  async function cadastrar() {
    const cliente = {
      id: 0, //O id será gerado pelo back-end
      nome: nomeForm.value,
      email: emailForm.value,
      anoNascimento: anoNascimentoForm.value
    }
  
    const novoCliente = await salvar(cliente);
    console.log(novoCliente);
  
    //Atualizar os dados da tabela
    createTr();
  
    //Limpa o formulário
    form.reset();
  }
  
  async function alterar() {
    const cliente = {
      id: nomeIdentificador.value,
      nome: nomeForm.value,
      email: emailForm.value,
      anoNascimento: anoNascimentoForm.value
    }
  
    console.log(cliente);
  
    const clienteAlterado = await atualizar(cliente.id, cliente);
    console.log(clienteAlterado);
  
    //Atualizar os dados da tabela
    createTr();
  
    //Limpa o formulário
    form.reset();
  }
  
  async function editar(id) {
    const cliente = await buscarClientePorId(id);
    console.log(cliente);
  
    nomeIdentificador.value = cliente.id;
    nomeForm.value = cliente.nome;
    emailForm.value = cliente.email;
    anoNascimentoForm.value = cliente.anoNascimento;
  };
  
  async function deletar(id) {
    const status = await excluir(id);
  
    if(status){
      console.log("Registro excluído com sucesso");
    }else{
      console.log("Falha ao excluir o registro");
    }
  
    //Atualizar os dados da tabela
    createTr();
  };