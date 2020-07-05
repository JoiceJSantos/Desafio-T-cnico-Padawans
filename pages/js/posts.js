var tbody = document.getElementById('tBody');


//cabeçalho de requisçao
const myHeaders = new Headers();
const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

//Requisição e retorno do jsonplaceholder

const myRequest =new Request('https://jsonplaceholder.typicode.com/posts', myInit);

fetch(myRequest)
.then(async  function(response) {
    let res = await response.json();
    posts(res);
});

// Criação e alimentação da tabela
  function posts(data){
      data.forEach(function(object) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + object.userId + '</td>' +
            '<td>' + object.id + '</td>' +
            '<td>' + object.title+ '</td>' +
            '<td>' + object.body + '</td>';

            tbody.appendChild(tr);
      });
  }
//===========================Search===========================//

// document.getElementById("search").addEventListener("keyup", function searchTable () {
//     var busca = document.getElementById("search").value.toLowerCase();
//     console.clear();
//     for (var x = 0; x < tbody.childNodes.length; x++){
//         var buscou = false;
//         tr = tbody.childNodes[x];
//         var td = tr.childNodes;
//
//
//         for (var y = 0; y < td.length; td++){
//             var value = td[y].childNodes[0].nodeValue.toLowerCase();
//             console.log(value);
//             if (value.indexOf(busca)>=0){
//                 buscou = true;
//                 console.log(buscou);
//             }
//             if(buscou ){
//                  tr.style.display = "table-row";
//             }else {
//                 table.style.display = "none";
//             }
//         }
//     }
//
// })





