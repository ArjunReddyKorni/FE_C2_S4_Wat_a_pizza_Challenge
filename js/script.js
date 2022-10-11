// Write solution code here to dynamically add the form fields 
var orderlist = [];


function orderCategory($event){
   
    event.preventDefault();
    let div = document.querySelector("#div")
    let label1 = document.createElement("label")
    let labelText1 = document.createTextNode("Category Name")
    label1.appendChild(labelText1)
    let input1 = document.createElement("input")
    input1.setAttribute("type", "text")
    input1.setAttribute("id", "in1")
    div.appendChild(label1)
    div.appendChild(input1)

    let label2 = document.createElement("label")
    let labelText2 = document.createTextNode("Item Name")
    label2.appendChild(labelText2)
    let input2 = document.createElement("input")
    input2.setAttribute("type", "text")
    input2.setAttribute("id", "in2")
    div.appendChild(label2)
    div.appendChild(input2)

    let label3 = document.createElement("label")
    let labelText3 = document.createTextNode("Price")
    label3.appendChild(labelText3)
    let input3 = document.createElement("input")
    input3.setAttribute("type", "number")
    input3.setAttribute("id", "in3")
    input3.setAttribute("value",0)
    div.appendChild(label3)
    div.appendChild(input3)

    let label4 = document.createElement("label")
    let labelText4 = document.createTextNode("Quantity")
    label4.appendChild(labelText4)
    let input4 = document.createElement("input")
    input4.setAttribute("type", "number")
    input4.setAttribute("id", "in4")
    input4.setAttribute("value",0)
    div.appendChild(label4)
    div.appendChild(input4)

    let label5 = document.createElement("label")
    let labelText5 = document.createTextNode("Amount")
    label5.appendChild(labelText5)
    let input5 = document.createElement("input")
    input5.setAttribute("type", "text")
    input5.setAttribute("id", "in5")
    
    div.appendChild(label5)
    div.appendChild(input5)


    let input6 = document.createElement("button")
    tetxbtn = document.createTextNode("save");
    input6.appendChild(tetxbtn);
    input6.addEventListener("click", saveOrder)
    div.appendChild(input6)
}
// Save the order details on clicking the submit button
function saveOrder() {
   
    let order = {
       // "OrderId": document.getElementById("input1").value,
        // "Customer Name": document.getElementById("input2").value,
        // "email": document.getElementById("input3").value,
        // "Contact Number": document.getElementById("input4").value,
        // "Order Date": document.getElementById("input5").value,
        // "Address": document.getElementById("input6").value,
        "categoryName": document.getElementById("in1").value,
        "itemName": document.getElementById("in2").value,
        "price": document.getElementById("in3").value,
        "quantity": document.getElementById("in4").value,
        "amount": document.getElementById("in3").value * document.getElementById("in4").value

    }
    orderlist.push(order)
    console.log("Form submitted");
    document.getElementById("in5").value = order.amount;
    console.log(orderlist)
    alert("Total Bill Amount is: "+ order.amount)
    return false;
}
