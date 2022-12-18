function adicionarTarefa(){
    var text = document.querySelector('#tarefa').value;
    

    var lista = document.querySelector('#lista')
    var objeto = document.createElement('li')
 

    objeto.innerHTML = text;

    lista.appendChild(objeto);
    

    document.querySelector('#tarefa').value = '';

    salvarTarefa(tarefa);

}