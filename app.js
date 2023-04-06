

// var goldRate = 207800;
// var silverRate = 2161.39;
// var goldCost = +gold * goldRate;
// var silverCost = +Math.round(silver * silverRate);


// var totalAssets = amount + goldCost + silverCost;
// var zakat = totalAssets / 40;







function abc() {

    //alert(1);
    var amount = +document.getElementById("cash").value;
    var gold = +document.getElementById("gold").value;
    var silver = +document.getElementById("silver").value;
    // var total = amount + gold + silver;
    // var assets = document.getElementById("assets").value;
    //alert(2);
    var totalZakat = document.getElementById("assets");
    totalZakat.value = amount + gold + silver;
    //alert(totalZakat)

    // console.log(amount.value);
    // console.log(gold.value);
    // console.log(silver.value);
    // console.log(total.value);

    var end_amount = document.getElementById("networth");
    end_amount.innerHTML = totalZakat.value;

    event.preventDefault();
}


// var result = document.getElementById("total").value = amount + gold + silver;
// result.innerHTML = total