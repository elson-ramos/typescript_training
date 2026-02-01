// tuplas permitem diferentes tipos de dados, arrays é apenas um tipo.

let listaDeCompras: [string, string, number];
listaDeCompras = ["Lamborghini", "Revuelto", 1];
listaDeCompras.push("Fiat", "500", 1)
listaDeCompras.push("Porsche", "Panamera", 2)
listaDeCompras.push("Audi", "TT", 1)
listaDeCompras.push("Tesla", "Model S", 2)

// aplicando tuplas nomeadas

let listaDeCompras2: [marca: string, modelo: string, quantidade: number];
listaDeCompras2 = ["Bugatti", "Tourbillion", 2];