

// var goldRate = 207800;
// var silverRate = 2161.39;
// var goldCost = +gold * goldRate;
// var silverCost = +Math.round(silver * silverRate);


// var totalAssets = amount + goldCost + silverCost;
// var zakat = totalAssets / 40;







function abc() {

var amount = document.getElementById("cash").value;
var gold = document.getElementById("gold").value;
var silver = document.getElementById("silver").value;
var assets = document.getElementById("assets").value;
var total = amount + gold + silver + assets;
document.getElementById("net_worth").innerHTML = total

// console.log(amount.value);
// console.log(gold.value);
// console.log(silver.value);
// console.log(total.value);
}

    
// var result = document.getElementById("total").value = amount + gold + silver;
// result.innerHTML = total