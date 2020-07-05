var tbody= document.getElementById('tBody');
//cabeçalho de requisçao
const myHeaders = new Headers();
const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};
//Requisição e retorno do jsonplaceholder
const myRequest =new Request('https://jsonplaceholder.typicode.com/albums', myInit);

fetch(myRequest)
.then(async  function(response) {
    let res = await response.json();
    albums(res);
});

// Criação e alimentação da tabela

  function albums(data){
            data.forEach(function(object) {
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + object.userId + '</td>' + '<td>' + object.id + '</td>' +'<td>' + object.title+ '</td>'

                tbody.appendChild(tr);
            });
  }


//===========================Search===========================//


//   document.getElementById("search").addEventListener("keydown", function () {
//     var busca = document.getElementById("search").value.toLowerCase();
//     console.clear();
//     for (var x = 0; x < tbody.childNodes.length; x++){
//         var buscou = false;
//         var tr = tbody.childNodes[x];
//         var td = tr.childNodes;
//
//         for (var y = 0; y < td.length; td++){
//             var value = td[y].childNodes[0].nodeValue.toLowerCase();
//             console.log(value);
//             if (value.indexOf(busca)>=0){
//                 buscou = true;
//             }
//         }
//         if(buscou){
//             tr.style.display = "table-row";
//         }else{
//             tr.style.display = " ";
//         }
//     }
//
// })
