let Inventory = JSON.parse(localStorage.getItem('Inventory')) || [

  {
    code: "B001",
    name: "Classic Cheeseburger",
    category: "Burgers",
    price: "Rs.850.00",
    qty: "20",
    exp: "2025-07-07"
  },
  {
    code: "B002",
    name: "Veggie Burger",
    category: "Burgers",
    price: "Rs.800.00",
    qty: "20",
    exp: "2025-07-11"
  },
  {
    code: "B003",
    name: "Classic Submarine",
    category: "Submarine",
    price: "Rs.700.00",
    qty: "20",
    exp: "2025-07-07"
  },
  
  {
    code: "B004",
    name: "Classic Cola",
    category: "Drinks",
    price: "Rs.300.00",
    qty: "20",
    exp: "2025-09-07"
  },
  {
    code: "B005",
    name: "Orange Juice",
    category: "Drinks",
    price: "Rs.250.00",
    qty: "20",
    exp: "2025-07-02"
  }
];

loadTable();

function additems(){

    let code = document.getElementById("inputCode").value;
    let name = document.getElementById("inputName").value;
    let category = document.getElementById("inputcategory").value;
    let price = document.getElementById("inputprice").value;
    let qty = document.getElementById("inputQuantity").value;
    let exp = document.getElementById("inputexp").value;

    Inventory.push({
        code : code,
        name : name,
        category : category,
        price : price,
        qty : qty,
        exp : exp
    });

     localStorage.setItem('Inventory', JSON.stringify(Inventory));

    loadTable();
}

function deleteItem(code){
   
    Inventory = Inventory.filter(item => item.code !== code);

   
    localStorage.setItem('Inventory', JSON.stringify(Inventory));

   
    loadTable();
}


function loadTable(){

    let inventoryTable = document.getElementById("inventoryTable");

    let body = '';

    for(let detail of Inventory){
        body+=`<tr>
                   <td>${detail.code}</td>
                   <td>${detail.name}</td>
                   <td>${detail.category}</td>
                   <td>${detail.price}</td>
                   <td>${detail.qty}</td>
                   <td>${detail.exp}</td>
                   <td><button class="btn btn-danger btn-sm" onclick="deleteItem('${detail.code}')">Delete</button></td>
               </tr>  `
    }

    inventoryTable.innerHTML=body;

}

