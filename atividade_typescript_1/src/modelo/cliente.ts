export default class Cliente{ // export default: permite que essa classe seja importada por outras classes existentes no projeto.
    id: number;
    nome: string;
    email: string;
    anoNacimento:number;  // informações batem com as do arquivo json: "mapeamento"

    constructor(id: number, nome: string, 
        email:string, anoNacimento:number){

        this.id = id;
        this.nome = nome;
        this.email = email;
        this.anoNacimento = anoNacimento;
    }
}