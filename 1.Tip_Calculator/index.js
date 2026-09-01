const btnClick = document.getElementById("calculate");

const billInput = document.getElementById("bill")

const tipInput = document.getElementById("tip")

const totalSpan = document.getElementById("total")

function calculateTotal(){
    const billvalue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billvalue *(1+tipValue/100);
    totalSpan.innerHTML = totalValue.toFixed(2)
}

btnClick.addEventListener("click",calculateTotal);