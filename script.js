const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 let total = 0;
    let arr = document.querySelectorAll(".price");

    for (let item of arr) {
        total += parseInt(item.innerText); // Convert text to integer
    }

    console.log("Total Price:", total);

    // Creating and inserting a new row with the total price
    const totalRow = document.createElement("tr");

    const totalLabel = document.createElement("td");
    totalLabel.innerHTML = "<strong>Total</strong>";
    
    const totalPrice = document.createElement("td");
    totalPrice.innerHTML = `<strong>${total}</strong>`;
	totalPrice.setAttribute("id", "ans")

    totalRow.appendChild(totalLabel);
    totalRow.appendChild(totalPrice);

    document.querySelector("table").appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

