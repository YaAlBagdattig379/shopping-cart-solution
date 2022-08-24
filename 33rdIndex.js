// 1....increse 
// update phone button 
function updateProductNumber(product,price,isAdd){
    //  debugger; 
    const productId = document.getElementById(product + "-number");
    let productNumber = productId.value;
    if(isAdd == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) -1 ;
    }
    productId.value = productNumber;
    const phoneCost = document.getElementById(product + "-total");
    phoneCost.innerText = productNumber * price;
       // for subTotal
    calculation()
}
document.getElementById("phone-plus").addEventListener("click",function(){
    // debugger;
    // const phonePlus = document.getElementById("phone-number");
    // const phoneIncrease = phonePlus.value;
    // phonePlus.value = parseInt(phoneIncrease) + 1;
     updateProductNumber("phone",1219,true)
})
// 2....decrese 
document.getElementById("phone-minus").addEventListener("click",function(){
    // const phoneMinus = document.getElementById("phone-number");
    // const phoneDecrease = phoneMinus.value;
    // phoneMinus.value = parseInt(phoneDecrease) -1 ;
    updateProductNumber("phone",1219,false)
})
// 1,,,, increase
document.getElementById("case-plus").addEventListener("click",function(){
    // case plus 
    // const casePlus = document.getElementById("case-number");
    // const casePlusValue = casePlus.value;
    // casePlus.value = parseInt(casePlusValue) + 1;
    updateProductNumber("case",59,true)
})
// 2,,,, decrease
document.getElementById("case-minus").addEventListener("click",function(){
     
    updateProductNumber("case",59,false)
})



// calculation 
// calculation 
// calculation 
function getInputValue(product){
    const productInput = document.getElementById(product+"-number");
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}
function calculation(){
    // debugger;
    // const phoneInput = document.getElementById("phone-number");
    // const phoneNumber = parseFloat(phoneInput.value);
     const phoneInput = getInputValue("phone") * 1219;
     const caseInput = getInputValue("case") * 59;
    //  for subTotal 
    const subTotal = phoneInput + caseInput;
    // for tax 
    const tax = subTotal / 10;
     const total = subTotal + tax;
    //  update on the HTML calculation 
    document.getElementById("sub-total").innerText = subTotal ;
    document.getElementById("tax-amount").innerText = tax ;
    document.getElementById("total-price").innerText = total ;
    //  subTotalValue.innerText = subTotal
    // //  tax calculation 
    //  const tax = document.getElementById("tax-amount");
    //  tax.innerText = parseInt((10 / 100) * subTotal);
    // // total calculation
    //  const allTotal = document.getElementById("total-price");
    //  allTotal.innerText = parseInt(tax.innerText) + parseInt(subTotalValue.innerText);
    // //  allTotal.innerText = parseInt(tax.value) + parseInt(subTotal.value);
    //  console.log(allTotal);
}
// for subTotal /
// const subTotalValue = document.getElementById("sub-total");
// subTotalValue.innerText = 
// cosnt document.getElementById("sub-total").addEventListener("click",function(){
//     console.log("hello don't click me so much !")
// });

// // b.........tax 
// document.getElementById("tax-amount").addEventListener("click",function(){
//     console.log("hello don't touch me so much !")
// });
// // c......total 
// document.getElementById("total-price").addEventListener("click",function(){
//     console.log("hello world from my side !")
// });