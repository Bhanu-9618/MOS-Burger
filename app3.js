let cust = JSON.parse(localStorage.getItem('cust')) || [];

loadTable3();

function addcust(){

  let id = document.getElementById("ID").value ;
  let custname = document.getElementById("CustomerName").value ;

  cust.push({
    id : id,
    custname : custname

  })

  localStorage.setItem('cust', JSON.stringify(cust));

  loadTable3();

}

function deleteItem2(id){
   
    cust = cust.filter(item => item.id !== id);

   
    localStorage.setItem('cust', JSON.stringify(cust));

   
    loadTable3();
}

function loadTable3(){

    let CustTable = document.getElementById("CustTable");

    let body = '';

    for(let detail of cust){
        body+=`<tr>
                   <td>${detail.id}</td>
                   <td>${detail.custname}</td>
                   <td><button class="btn btn-danger btn-sm" onclick="deleteItem2('${detail.id}')">Delete</button></td>
               </tr>  `
    }

    CustTable.innerHTML=body;

}

loadTable3();