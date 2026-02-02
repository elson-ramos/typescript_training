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