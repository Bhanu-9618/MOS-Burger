let Order = JSON.parse(localStorage.getItem('Order')) ||  [


];

loadTable2();

function addtocart(){

    let OrderID = document.getElementById("OrderID").value;
    let CustID = document.getElementById("CustomerID").value;
    let code = document.getElementById("ItemCode").value;
    let name = document.getElementById("ItemName").value;
    let price = document.getElementById("Price").value;
    let qty = document.getElementById("Quantity").value;
    let discount = document.getElementById("Discount").value;

    Order.push({
        OrderID : OrderID,
         CustID : CustID,
         code : code,
         name : name,
         price : price,
         qty : qty,
         discount : discount
        
    });

     localStorage.setItem('Order', JSON.stringify(Order));
     
 
     loadTable2();
    
}


function deleteItem(OrderID){
   
    Order = Order.filter(item => item.OrderID !== OrderID);

   
    localStorage.setItem('Order', JSON.stringify(Order));

   
    loadTable2();
}


function loadTable2(){

    let CartTable = document.getElementById("CartTable");

    let body = '';

    for(let detail of Order){
        body+=`<tr>
                   <td>${detail.OrderID}</td>
                   <td>${detail.CustID}</td>
                   <td>${detail.code}</td>
                   <td>${detail.name}</td>
                   <td>${(Number(detail.price) -( Number(detail.price)/100 * Number(detail.discount))) * Number(detail.qty)}</td>
                   <td>${detail.qty}</td>
                   <td><button class="btn btn-danger btn-sm" onclick="deleteItem('${detail.OrderID}')">Delete</button></td>
               </tr>  `
    }

    CartTable.innerHTML=body;

    
        
}

function showresults() {
   
    let searchCode = document.getElementById("Searchbox").value.trim();

   
    let Inventory = JSON.parse(localStorage.getItem('Inventory')) || [];

   
    let foundItem = Inventory.find(item => item.code === searchCode || item.name === searchCode);

   
    let tableBody = document.getElementById("ResultTable").querySelector("tbody");

    if (foundItem) {
        tableBody.innerHTML = `
            <tr>
                <td>${foundItem.code}</td>
                <td>${foundItem.name}</td>
                <td>${foundItem.price}</td>
                <td>${foundItem.exp}</td>
            </tr>
        `;

        // Also, fill the "Add to Cart" form inputs with this item data automatically
        document.getElementById("ItemCode").value = foundItem.code;
        document.getElementById("ItemName").value = foundItem.name;

    } 
}


