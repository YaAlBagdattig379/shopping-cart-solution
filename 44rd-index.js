    // first function  all in one "click"
    // first function  all in one "click"
    // first function  all in one "click"
function updatePhone(product,price,isAdd){ 
    // debugger;
    const phone = document.getElementById(product +"-number");
    // const phoneNumber = phone.value;
    if(isAdd == true){
        const phoneIncrease = parseInt(phone.value) + 1;
        phone.value = phoneIncrease;
    }
    else if(phone.value > 0){
        const phoneDecrease = parseInt( phone.value)  - 1;
        phone.value = phoneDecrease;
    }
    const phoneTotal = document.getElementById( product +"-total");
    phoneTotal.innerText = phone.value * price;
    // console.log(phoneTotal.innerText);   

    // for updateCal
    // for updateCal
    updateCal() 
}


// phone button 
// phone button 

// plus button 
document.getElementById("phone-plus").addEventListener("click",function(){
    // console.log("o hello are you ok?")
     //phoneincrease
    updatePhone("phone",1219,true)
})
// minus button 
document.getElementById("phone-minus").addEventListener("click",function(){
        // phoneDecrease  

    updatePhone("phone",1219,false)
})

// case button 
// case button 

// case plus
document.getElementById("case-plus").addEventListener("click",function(){
    updatePhone("case",59,true);
})
// case minus
document.getElementById("case-minus").addEventListener("click",function(){
    updatePhone("case",59,false);
})

// mega calculation 
// mega calculation
// mega calculation
// mega calculation
// mega calculation

function shoppingUpdate( product){
    const phoneNumber = document.getElementById(product + "-number");
    const phoneNo = parseInt(phoneNumber.value);
    return phoneNo;
}
function updateCal(){
   
    const phoneCal = shoppingUpdate("phone") * 1259;
    const caseCal = shoppingUpdate("case") * 59;
    const subtotal = phoneCal + caseCal;
    const tax = subtotal / 10;
    const megaTotal = subtotal + tax;

    // update by html Element new technique to me
    // update by html Element new technique to me
    document.getElementById("sub-total").innerText = subtotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = megaTotal;
    

}
