/*
//  this is main function of this page 
//  this is main function of this page 
function updateProductNumber(product, price ,isIncreaSing){
    const productInput = document.getElementById(product + '-number');
    let productNumber  = productInput.value;
    // if(isIncreaSing == true){
    if(isIncreaSing){
       productNumber = parseInt(productNumber) + 1;  
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;  
    }
    productInput.value = productNumber;
     // Update Total
    const productTotal = document.getElementById( product + '-total');
    productTotal.innerText = productNumber * price;
    // subTotal for "call"
    calculateTotal()
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const  phoneTotal =  getInputValue('phone') * 1219;
    const  caseTotal =  getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totaPrice = subTotal + tax;
    // update on the HTML
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totaPrice;
}

// handle phone  increase decrease events 
// 1... this is first click for " +"
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone' , 1219 , true)
})
// 2... this is first click for " -"
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone' , 1219 , false)
 })

// handle case increase decrease events 
// 1... this is first click for " +"
document.getElementById('case-plus').addEventListener('click',function(){
    // const caseInput = document.getElementById('phone-number');
    // const caseNumber  = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updateProductNumber('case' , 59 ,  true)
})
// 2... this is second click for " -"
document.getElementById('case-minus').addEventListener('click',function(){
    // const caseInput = document.getElementById('phone-number');
    // const caseNumber  = caseInput.value;
    updateProductNumber('case' , 59 , false)
})

*/ 