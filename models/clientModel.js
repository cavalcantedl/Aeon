const listaClientes = [
    {
        "id": 1,
        "empresa":"C&C",
        "criada":"23-09-2021",
    },
    {
        "id": 2,
        "empresa":"Pizzaria Domino's",
        "criada":"25-09-2021",
    },
    {
        "id": 3,
        "empresa":"Philips",
        "criada": "30-09-2021" ,
    }
];

function buscarClienteID(id){
    let resultado = listaClientes.find(cliente =>{
        return cliente.id == id;
    });
    return resultado;
}

async function editarCliente(id, novosDados){
    let res = await listaClientes.filter(cliente =>{
        if(cliente.id == id){
            cliente.empresa = novosDados.empresa
        }
        });
            if(res != undefined){
                return true;
        }
            else{
            return false;
            
    }
  
}

module.exports = {
    listaClientes,
    buscarClienteID,
    editarCliente
} 