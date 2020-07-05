var tbody = document.getElementById("tBody");
//cabeçalho de requisçao

const myHeaders = new Headers();
const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};
//Requisição e retorno do jsonplaceholder

const myRequest =new Request('https://jsonplaceholder.typicode.com/todos', myInit);

fetch(myRequest)
.then(async  function(response) {
    let res = await response.json();
    all(res);
});
// Criação e alimentação da tabela

  function all(data){
            data.forEach(function(object) {
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + object.userId + '</td>' + '<td>' + object.id + '</td>' +'<td>' + object.title+ '</td>'+ object.completed+ '</td>'

                tbody.appendChild(tr);
            });
  }
