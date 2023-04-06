




// var totalAssets = amount + goldCost + silverCost;





// var zakat = totalAssets / 40;


function abc() {
    

    var amount = +document.getElementById("cash").value;
    var gold = +document.getElementById("gold").value;
    var silver = +document.getElementById("silver").value;
    var assets = +document.getElementById("assets").value;
    
    var goldRate = 207800;
    var silverRate = 2161.39;
    var goldCost = gold * goldRate;
    var silverCost = Math.round(silver * silverRate);
    
    
    
    
    
    
    totalZakat = amount + goldCost + silverCost + assets;
    var end_amount = document.getElementById("networth");
    end_amount.innerHTML = totalZakat;


    var zakatAmount = document.getElementById("zakatamount");
    zakatAmount.innerHTML = Math.round(totalZakat / 40);









    event.preventDefault();
}


// var result = document.getElementById("total").value = amount + gold + silver;
// result.innerHTML = total